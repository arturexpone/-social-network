import React from 'react';
import {Button, Form, Segment} from 'semantic-ui-react';

export const EventForm = ({handlerCancelForm}) => {
  return (
      <Segment>
        <Form>
          <Form.Field>
            <label>Название мероприятия</label>
            <input placeholder='Имя' />
          </Form.Field>
          <Form.Field>
            <label>Дата события</label>
            <input type="date" placeholder='Дата события' />
          </Form.Field>
          <Form.Field>
            <label>Город</label>
            <input placeholder='Мероприятие в городе' />
          </Form.Field>
          <Form.Field>
            <label>Место проведения</label>
            <input placeholder='Введите место проведения мероприятия' />
          </Form.Field>
          <Form.Field>
            <label>Кем размещается</label>
            <input placeholder='Введите Ваше имя' />
          </Form.Field>
          <Button positive type='submit'>
            Отправить
          </Button>
          <Button onClick={handlerCancelForm} type='button'>Отменить</Button>
        </Form>
      </Segment>
  )
}