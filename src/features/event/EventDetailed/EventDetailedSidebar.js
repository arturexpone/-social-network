import React from 'react';
import {Item, Label, List, Segment} from 'semantic-ui-react';

import user from '../../../assets/images/user.png'

export const EventDetailedSidebar = ({event}) => {

  const {attendees} = event;

  const attendee = attendees.map(user => (
    <Item key={user.id} style={{ position: 'relative' }}>
      {attendees.isHost &&
          <Label
            style={{ position: 'absolute' }}
            color='orange'
            ribbon='right'
          >
            Host
          </Label>
      }
      <Item.Image size='tiny' src={user.photoURL} />
      <Item.Content verticalAlign='middle'>
        <Item.Header as='h3'>
          <a>{user.name}</a>
        </Item.Header>
      </Item.Content>
    </Item>
  ));

  const attendeesLength = attendees.length;

  return (
    <>
      <Segment
        textAlign='center'
        style={{ border: 'none' }}
        attached='top'
        secondary
        inverted
        color='teal'
      >
        {attendees && attendeesLength} {attendees && attendeesLength === 1 ? 'Person' : 'People'} Going
      </Segment>
      <Segment attached>
        <List relaxed divided>
          {attendee}
        </List>
      </Segment>
    </>
  );
}
