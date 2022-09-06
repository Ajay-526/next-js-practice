import { useRouter } from "next/router";
import { getFilteredEvents } from "../dummy-data";
import EventListItems from "../../components/events/event-list";
import ResultTitle from "../../components/events/results-title";
import { Fragment } from "react";
import Button from "../../components/UI/Button";
import ErrorAlert from "../../components/UI/error-alert";
function FileteredPage() {
  const router = useRouter();

  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }
  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  var numYear = +filteredYear;
  var numMonth = +filteredMonth;

  if (
    isNaN(numMonth) ||
    isNaN(numYear) ||
    numMonth < 1 ||
    numMonth > 12 ||
    numYear > 2030 ||
    numYear< 2021
  ) {
    return <Fragment>
      <ErrorAlert>
        <p>No Filetered data found. Please check the filters</p>
      </ErrorAlert>
      <div className='center'>
        <Button link="/events">Show All Events</Button>
      </div>
    </Fragment>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p> There are no events for the given filters</p>
        </ErrorAlert>
          <div className='center'>
            <Button link="/events">Show All Events</Button>
          </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);
  return (
    <Fragment>
      <ResultTitle date={date} />
      <EventListItems items={filteredEvents} />
    </Fragment>
  );
}

export default FileteredPage;
