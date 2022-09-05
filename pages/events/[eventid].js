import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

function EventWithAnId() {
  const router = useRouter();

  const eventId = router.query.eventid;

  const event = getEventById(eventId);

  if (!event) {
    return <h1>No event found</h1>;
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        imageAlt={event.title}
        image={event.image}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventWithAnId;
