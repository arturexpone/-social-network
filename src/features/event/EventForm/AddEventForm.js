import React, {useState} from 'react';
import {Button, Form, Grid, Header, Segment} from 'semantic-ui-react';
import {connect} from 'react-redux';
import cuid from 'cuid';
import {reduxForm, Field} from 'redux-form';

import {createEvent} from '../../../store/ac';
import {TextInput} from '../../common/form/TextInput';

const AddEventForm = (props) => {

  const {history, createEvent, handlerCancelForm} = props;

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

  const goBack = () => {
    if (history && history.location.pathname === '/create-event') {
      history.goBack();
    } else if (!history) {
      handlerCancelForm();
    }
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <Segment>

          <Form onSubmit={onSubmit} autoComplete='off'>

            <Header sub color='teal' content='Event Details' >Event Details</Header>
            <Field name='title' component={TextInput} placeholder='Give your event a name'/>
            <Field name='category' component={TextInput} placeholder='What is your event about?'/>
            <Field name='description' component={TextInput} placeholder='Tell is about your event'/>

            <Header sub color='teal' content='Event Location Details' >Event Location Details</Header>
            <Field name='city' component={TextInput} placeholder='Event City'/>
            <Field name='venue' component={TextInput} placeholder='Event Venue'/>
            <Field name='date' component={TextInput} placeholder='Event Date'/>
            <Button positive type='submit'>
              Add
            </Button>
            <Button
              onClick={goBack} type='button'>Cancel
            </Button>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default connect(
  null,
  {createEvent})
(reduxForm({form: 'eventForm'})(AddEventForm));
