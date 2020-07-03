import React from 'react';
import {Button, Header, Image, Item, Segment} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {format} from 'date-fns';


export const EventDetailedHeader = (props) => {

  const {date, hostedBy, category, title, id} = props;

  const img = category ? require(`../../../assets/categoryImages/${category}.jpg`) : null;

  const eventImageStyle = {
    filter: 'brightness(30%)'
  };

  const eventImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
  };

  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: '0' }}>
        <Image src={img} fluid style={eventImageStyle}/>

        <Segment basic style={eventImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={title}
                  style={{ color: 'white' }}
                />
                <p>{format(date.toDate(),'EEEE do LLLL')}</p>
                <p>
                  Hosted by <strong>{hostedBy}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        <Button>Cancel My Place</Button>
        <Button color="teal">Join this event</Button>

        <Button as={Link} to={`/manage/${id}`} color="orange" floated="right">
          Manage Event
        </Button>
      </Segment>
    </Segment.Group>
  );
};


