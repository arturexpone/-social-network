import React, {useState} from 'react';
import {Button, Form, Segment} from 'semantic-ui-react';
import {connect} from 'react-redux';

import {updateEvent} from '../../../store/ac';
import logo from '../../../assets/images/logo.png';

const EditEventForm = (props) => {

  const {history, events, match, updateEvent} = props;

  const event = events.filter(e => match.params.id === e.id)[0];

  const initialState = {
    id: event.id || '',
    title: event.title || '',
    date: event.date || '',
    city: event.city || '',
    venue: event.venue || '',
    hostedBy: event.hostedBy || '',
  };
  const [state, setState] = useState(initialState);

  const onSubmit = (e) => {
    e.preventDefault();
    updateEvent(state);
    goBack();
  }

  const changeState = e => {
    setState({...state, [e.target.name]: e.target.value});
  }

  const goBack = () => {
      history.goBack()
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
          Edit
        </Button>
        <Button
          onClick={goBack} type='button'>Cancel
        </Button>
      </Form>
    </Segment>
  );
};

export default connect(
  state => ({events: state.events}),
  {updateEvent})
(EditEventForm);
