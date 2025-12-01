import mongoose from 'mongoose';

// Extend the global namespace to include mongoose cache
declare global {
  var mongoose: {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Connection> | null;
  };
}

// Ensure MONGODB_URI environment variable is defined
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

/**
 * Global cache to prevent multiple connections in development.
 * In development, Next.js hot-reloads which can cause multiple connections.
 * In production, this cache ensures we reuse the connection across serverless invocations.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

/**
 * Establishes and returns a cached MongoDB connection.
 * Uses a singleton pattern to prevent connection exhaustion.
 * 
 * @returns Promise resolving to the Mongoose connection
 */
async function connectDB(): Promise<mongoose.Connection> {
  // Return existing connection if available
  if (cached.conn) {
    return cached.conn;
  }

  // If no connection promise exists, create one
  if (!cached.promise) {
    const opts: mongoose.ConnectOptions = {
      bufferCommands: false, // Disable Mongoose buffering
    };

    cached.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => {
      return mongoose.connection;
    });
  }

  try {
    // Wait for connection promise to resolve and cache it
    cached.conn = await cached.promise;
  } catch (error) {
    // Clear the promise on error so subsequent calls can retry
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}

export default connectDB;
