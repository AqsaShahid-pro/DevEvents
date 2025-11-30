export type EventItem = {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

export const events: EventItem[] = [
  {
    title: "React Workshop",
    image: "/images/event1.png",
    slug: "react-workshop",
    location: "San Francisco, CA",
    date: "2025-12-15",
    time: "10:00 AM",
  },
  {
    title: "JavaScript Meetup",
    image: "/images/event2.png",
    slug: "js-meetup",
    location: "New York, NY",
    date: "2025-12-20",
    time: "6:30 PM",
  },
  {
    title: "Web Dev Hackathon",
    image: "/images/event3.png",
    slug: "webdev-hackathon",
    location: "Austin, TX",
    date: "2026-01-10",
    time: "9:00 AM",
  },
  {
    title: "Node.js Conference",
    image: "/images/event4.png",
    slug: "nodejs-conference",
    location: "Seattle, WA",
    date: "2026-01-25",
    time: "8:00 AM",
  },
  {
  title: "TypeScript Bootcamp",
  image: "/images/event5.png",
  slug: "typescript-bootcamp",    
  location: "Boston, MA",
  date: "2026-02-08",
  time: "2:00 PM",
},
{
  title: "Frontend Masters Summit",
  image: "/images/event6.png",
  slug: "frontend-masters-summit",    
  location: "Los Angeles, CA",
  date: "2026-02-28",
  time: "11:00 AM",
}
];
