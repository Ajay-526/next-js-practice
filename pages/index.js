import {getFeaturedEvents} from '../pages/dummy-data'
import EventListItems from '../components/events/event-list';

export default function Home() {

  const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents)
  return (
    <div>
      <EventListItems items={featuredEvents} />
    </div>
  )
}
