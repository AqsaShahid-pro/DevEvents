import Explorebtn from "@/components/Explorebtn";
import EventCard from "@/components/EventCard";
import { events } from "@/lib/constants";

const Page = () => {
  return (
    <section>
      <h1 className="text-center">
        The Hub of Dev <br />
        Events You Can&apos;t Miss
      </h1>
      <p className="text-center mt-5">
        Hackathons, Meetups & Conferences All In One Place
      </p>
      <Explorebtn />

      <div className="mt-20 space-y-7">
        <h3>Featured events</h3>

        <ul className="events">
          {events.map((event) => (
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;
