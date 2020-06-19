import React from 'react';

import {Button, Icon, Item, List, Segment} from 'semantic-ui-react';
import {EventListAttendee} from './EventListAttendee';

export const EventListItem = (props) => {

  const {id, event} = props;

  const attendeeReadyMount = event.attendees.map(a => <EventListAttendee key={a.id} attendee={a}/>);

  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src={event.hostPhotoURL} />
            <Item.Content>
              <Item.Header as='a'>{event.title}</Item.Header>
              <Item.Description>
                Размещено <a>{event.hostedBy}</a>
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
          <span>
            <Icon name='clock' /> {event.date}
            <Icon name='marker' /> {event.venue}
          </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {attendeeReadyMount}
        </List>
      </Segment>
      <Segment clearing>
        <span>{event.description}</span>
        <Button as='a' color='teal' floated='right' content='View' />
      </Segment>
    </Segment.Group>
  )
}