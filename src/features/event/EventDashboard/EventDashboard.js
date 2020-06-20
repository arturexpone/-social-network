import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Button, Grid} from 'semantic-ui-react';

import {EventList} from '../EventList/EventList';
import {EventForm} from '../EventForm/EventForm';

import logo from '../../../assets/images/logo.png';

import {createEvent, deleteEvent, updateEvent} from '../../../store/ac';


const EventDashboard = (props) => {

  const {events, createEvent, deleteEvent, updateEvent} = props;

  const [isOpen, setIsOpen] = useState(false);

  const addEvent = (event) => {
    const newEvent = {
      id: events[events.length - 1].id + 1,
      title: event.eventName,
      date: event.eventDate,
      category: '',
      description: '',
      city: event.city,
      venue: event.venue,
      hostedBy: event.postedBy,
      hostPhotoURL: logo,
      attendees: [
        {
          id: Math.random() * 10 + 2,
          name: '',
          photoURL: ''
        },
        {
          id: Math.random() * 10 + 2,
          name: '',
          photoURL: ''
        }
      ]
    };
    createEvent(newEvent);
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList
          events={events}
          handleDeleteEvent={deleteEvent}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        <Button onClick={()=> setIsOpen(true)} positive content='Добавить мероприятие'/>
        { isOpen
          &&
          <EventForm
            handlerCancelForm={() => setIsOpen(false)}
            addEvent={addEvent}
          />
        }
      </Grid.Column>
    </Grid>
  )
};

const mapStateToProps = (state) => ({
  events: state.events
});

export default connect(mapStateToProps, {createEvent, updateEvent, deleteEvent})(EventDashboard);