import React from 'react';
import {EventListItem} from './EventListItem';

export const EventList = ({events, handleDeleteEvent}) => {

  const eventsReadyMont = events && events.map(e => (
    <EventListItem
      key={e.id}
      id={e.id}
      event={e}
      handleDeleteEvent={handleDeleteEvent}
    />));

  return (
    <>
      {eventsReadyMont}
    </>
  )
}