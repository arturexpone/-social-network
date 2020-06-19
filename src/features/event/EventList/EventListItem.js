import React from 'react';

import {Button, Icon, Item, List, Segment} from 'semantic-ui-react';
import {EventListAttendee} from './EventListAttendee';

export const EventListItem = () => {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src='https://randomuser.me/api/portraits/women/42.jpg' />
            <Item.Content>
              <Item.Header as='a'>Название поста</Item.Header>
              <Item.Description>
                Размещено <a>пользователь</a>
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
          <span>
            <Icon name='clock' />
            <Icon name='marker' />
          </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          <EventListAttendee />
          <EventListAttendee />
          <EventListAttendee />
        </List>
      </Segment>
      <Segment clearing>
        <span>Описание будет здесь</span>
        <Button as='a' color='teal' floated='right' content='View' />
      </Segment>
    </Segment.Group>
  )
}