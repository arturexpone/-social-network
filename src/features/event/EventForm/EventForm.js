import React, {useState} from 'react';
import {Button, Form, Segment} from 'semantic-ui-react';

export const EventForm = ({handlerCancelForm, addEvent, handleDeleteEvent}) => {

  const initialState = {
    eventDate: '',
    eventName: '',
    city: '',
    venue: '',
    postedBy: ''
  };
  const [state, setState] = useState(initialState);

  const onSubmit = (e) => {
    e.preventDefault();
    addEvent(state);
    setState(initialState);
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
              name='eventName'
              placeholder='Имя'
              value={state.eventName}
              onChange={(e) => changeState(e)}
            />
          </Form.Field>
          <Form.Field>
            <label>Дата события</label>
            <input
              name='eventDate'
              type="date"
              placeholder='Дата события'
              value={state.eventDate}
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
              name='postedBy'
              placeholder='Введите Ваше имя'
              value={state.postedBy}
              onChange={(e) => changeState(e)}
            />
          </Form.Field>
          <Button positive type='submit'>
            Отправить
          </Button>
          <Button onClick={handlerCancelForm} type='button'>Отменить</Button>
        </Form>
      </Segment>
  )
}