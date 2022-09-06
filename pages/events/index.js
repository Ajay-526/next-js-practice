import {getAllEvents} from '../dummy-data'
import {useRouter} from 'next/router'
import EventListItems from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { Fragment } from 'react';
function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();
  function searchHandler(year, month){

    const searchPath = `/events/${year}/${month}`;
    router.push(searchPath);
  }
  return (
    <Fragment>
      <EventsSearch onSearch={searchHandler}/>
      <EventListItems items={events}/>
    </Fragment>
  )
}

export default AllEventsPage