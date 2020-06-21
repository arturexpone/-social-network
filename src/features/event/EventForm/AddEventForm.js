import React, {useState} from 'react';
import {Button, Form, Segment} from 'semantic-ui-react';
import {connect} from 'react-redux';

import {createEvent} from '../../../store/ac';

const AddEventForm = (props) => {

  const {history, createEvent, handlerCancelForm} = props;

  const initialState = {
    id: Math.floor(Math.random() * (100500 - 1)) + 1,
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
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <label>Название мероприятия</label>
          <input
            name='title'
            placeholder='Имя'
            value={state.title}
            onChange={(e) => changeState(e)}
          />
        </Form.Field>
        <Form.Field>
          <label>Дата события</label>
          <input
            name='date'
            type="date"
            placeholder='Дата события'
            value={state.date}
            onChange={(e) => changeState(e)}
          />
        </Form.Field>
        <Form.Field>
          <label>Город</label>
          <input
            name='city'
            placeholder='Введите название города'
            value={state.city}
            onChange={(e) => changeState(e)}
          />
        </Form.Field>
        <Form.Field>
          <label>Место проведения</label>
          <input
            name='venue'
            placeholder='Введите место проведения мероприятия'
            value={state.venue}
            onChange={(e) => changeState(e)}
          />
        </Form.Field>
        <Form.Field>
          <label>Кем размещается</label>
          <input
            name='hostedBy'
            placeholder='Введите Ваше имя'
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
(AddEventForm);
