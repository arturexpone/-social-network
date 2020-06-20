import React from 'react';
import {Item, Label, List, Segment} from 'semantic-ui-react';

import user from '../../../assets/images/user.png'

export const EventDetailedSidebar = (props) => {
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
        2 People Going
      </Segment>
      <Segment attached>
        <List relaxed divided>
          <Item style={{ position: 'relative' }}>
            <Label
              style={{ position: 'absolute' }}
              color='orange'
              ribbon='right'
            >
              Host
            </Label>
            <Item.Image size='tiny' src={user} />
            <Item.Content verticalAlign='middle'>
              <Item.Header as='h3'>
                <a>Attendee Name</a>
              </Item.Header>
            </Item.Content>
          </Item>
        </List>
      </Segment>
    </>
  );
}
