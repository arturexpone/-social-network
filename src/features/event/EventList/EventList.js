import React from 'react';
import {EventListItem} from './EventListItem';

export const EventList = ({events}) => {

  const eventsReadyMont = events.map(e => <EventListItem key={e.id} event={e}/>);

  return (
    <>
      {eventsReadyMont}
    </>
  )
}