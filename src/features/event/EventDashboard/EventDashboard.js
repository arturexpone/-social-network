import React, {useState} from 'react';

import {Button, Grid} from 'semantic-ui-react';

import {EventList} from '../EventList/EventList';
import {EventForm} from '../EventForm/EventForm';

import logo from '../../../assets/images/logo.png';

export const EventDashboard = () => {

  const initialState = {
    events: [
      {
      id: '1',
      title: 'Trip to Tower of London',
      date: '2018-03-27T11:00:00+00:00',
      category: 'culture',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'London, UK',
      venue: "Tower of London, St Katharine's & Wapping, London",
      hostedBy: 'Bob',
      hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
      attendees: [
        {
          id: 'a',
          name: 'Bob',
          photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
        },
        {
          id: 'b',
          name: 'Tom',
          photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
        }
      ]
    },
      {
        id: '2',
        title: 'Trip to Punch and Judy Pub',
        date: '2018-03-28T14:00:00+00:00',
        category: 'drinks',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'London, UK',
        venue: 'Punch & Judy, Henrietta Street, London, UK',
        hostedBy: 'Tom',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
        attendees: [
          {
            id: 'b',
            name: 'Tom',
            photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
          },
          {
            id: 'a',
            name: 'Bob',
            photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
          }
        ]
      }
      ],
    isOpen: false,
    selectedEvent: null
  };
  const [state, setState] = useState(initialState);

  const handlerCancelForm = () => {
    setState({...state, isOpen: false});
  };
  const addEvent = (event) => {
    const newEvent = {
      id: state.events[state.events.length - 1].id + 1,
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
    setState({...state, events: [...state.events, newEvent]});
  };
  const handleDeleteEvent = (id) => {
    const updateEventArray = state.events.filter(e => e.id !== id);
    setState({...state, events: updateEventArray});
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList
          events={state.events}
          handleDeleteEvent={handleDeleteEvent}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        <Button onClick={()=> setState({...state, isOpen: true})} positive content='Добавить мероприятие'/>
        { state.isOpen
          &&
          <EventForm
            handlerCancelForm={handlerCancelForm}
            addEvent={addEvent}
          />
        }
      </Grid.Column>
    </Grid>
  )
}