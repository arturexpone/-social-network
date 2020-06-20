import React from 'react';

import {Button, Icon, Item, List, Segment} from 'semantic-ui-react';
import {EventListAttendee} from './EventListAttendee';
import {Link} from 'react-router-dom';

export const EventListItem = (props) => {

  const {id, event, handleDeleteEvent} = props;

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
                Hosted by <a>{event.hostedBy}</a>
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
        <br/>
        <br/>
        <Button
          as='a'
          color='red'
          floated='right'
          content='Delete'
          onClick={() => handleDeleteEvent(event.id)}
        />
        <Button
          as={Link}
          to={`/events/${id}`}
          color='teal'
          floated='right'
          content='View'
        />
      </Segment>
    </Segment.Group>
  )
}