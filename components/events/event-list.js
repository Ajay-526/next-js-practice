import EventItem from "../events/event-item";
import classes from '../events/event-list.module.css';
function EventListItems(props) {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((event) => {
        return <EventItem
          key={event.id}
          image={event.image}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
        />;
      })}
    </ul>
  );
}

export default EventListItems;
