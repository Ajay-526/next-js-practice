import {getAllEvents} from '../dummy-data'
import EventListItems from '../../components/events/event-list';
function AllEventsPage() {
  const events = getAllEvents();

  return (
    <div>
      <EventListItems items={events}/>
    </div>
  )
}

export default AllEventsPage