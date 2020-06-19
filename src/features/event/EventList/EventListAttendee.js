import React from 'react';

import {Image, List} from 'semantic-ui-react';

export const EventListAttendee = ({attendee}) => {

  return (
    <List.Item>
      <Image as='a' size='mini' circular src={attendee.photoURL}/>
    </List.Item>
  )
}