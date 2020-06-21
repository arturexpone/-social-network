import React, {useState} from 'react';
import {Button, Form, Segment} from 'semantic-ui-react';
import {connect} from 'react-redux';
import cuid from 'cuid';
import {reduxForm, Field} from 'redux-form';

import {createEvent} from '../../../store/ac';

const AddEventForm = (props) => {

  const {history, createEvent, handlerCancelForm} = props;

  const initialState = {
    id: cuid(),
    title: '',
    date: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    hostedBy: '',
    hostPhotoURL: '',
    attendees: [
      {
        id: Math.floor(Math.random() * (100500 - 1)) + 1,
        name: '',
        photoURL: ''
      },
      {
        id: Math.floor(Math.random() * (100500 - 1)) + 1,
        name: '',
        photoURL: ''
      }
    ]
  };
  const [state, setState] = useState(initialState);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(state)
    createEvent(state);
    setState(initialState);
    if (!history) {
      handlerCancelForm();
    } else if (history && history.location.pathname === '/create-event') {
      goBack();
    }
  }

  const changeState = e => {
    setState({...state, [e.target.name]: e.target.value});
  }

  const goBack = () => {
    if (history && history.location.pathname === '/create-event') {
      history.goBack();
    } else if (!history) {
      handlerCancelForm();
    }
  }

  return (
    <Segment>
      <Form onSubmit={onSubmit} autoComplete='off'>
        <Field name='title' component='input' placeholder='Event title'/>
        <Form.Field>
          <label>Event Date</label>
          <input
            name='date'
            type="date"
            placeholder='Enter event date'
            value={state.date}
            onChange={(e) => changeState(e)}
          />
        </Form.Field>
        <Form.Field>
          <label>City</label>
          <input
            name='city'
            placeholder='Enter city name'
            value={state.city}
            onChange={(e) => changeState(e)}
          />
        </Form.Field>
        <Form.Field>
          <label>Event venue</label>
          <input
            name='venue'
            placeholder='Enter venue'
            value={state.venue}
            onChange={(e) => changeState(e)}
          />
        </Form.Field>
        <Form.Field>
          <label>Hosted by</label>
          <input
            name='hostedBy'
            placeholder='Enter name'
            value={state.hostedBy}
            onChange={(e) => changeState(e)}
          />
        </Form.Field>
        <Button positive type='submit'>
          Add
        </Button>
        <Button
          onClick={goBack} type='button'>Cancel
        </Button>
      </Form>
    </Segment>
  );
};

export default connect(
  null,
  {createEvent})
(reduxForm({form: 'eventForm'})(AddEventForm));
