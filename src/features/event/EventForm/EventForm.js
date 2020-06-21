import React, {useState} from 'react';
import {Button, Form, Segment} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {updateEvent} from '../../../store/ac';

const EventForm = (props) => {

  const {handlerCancelForm, addEvent, history, events, match, updateEvent} = props;
  const event = match ? events.filter(e => match.params.id === e.id)[0] : {};
  const initialState = {
    id: event.id || '',
    date: event.date || '',
    title: event.title || '',
    city: event.city || '',
    venue: event.venue || '',
    hostedBy: event.hostedBy || ''
  };
  const [state, setState] = useState(initialState);

  const onSubmit = (e) => {
    e.preventDefault();
    if (JSON.stringify(event).length > 2) {
      console.log(state)
      updateEvent(state);
      history.push(`/events/${event.id}`);
    } else if (JSON.stringify(event).length <= 2) {
      addEvent(state);
      setState(initialState);
    }
  }

  const changeState = e => {
    setState({...state, [e.target.name]: e.target.value});
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
            {match ? `Edit` : `Add`}
          </Button>
          <Button
            onClick={
              match
                ? () => history.push(`/events/${event.id}`)
                : handlerCancelForm} type='button'>Cancel
          </Button>
        </Form>
      </Segment>
  )
};

export default connect(state => ({events: state.events}), {updateEvent})(EventForm);