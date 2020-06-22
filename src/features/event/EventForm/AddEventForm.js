import React, {useState} from 'react';
import {Button, Form, Grid, Header, Segment} from 'semantic-ui-react';
import {connect} from 'react-redux';
import cuid from 'cuid';
import {reduxForm, Field} from 'redux-form';

import {createEvent} from '../../../store/ac';
import {TextInput} from '../../common/form/TextInput';
import {TextArea} from '../../common/form/TextArea';
import {SelectInput} from '../../common/form/SelectInput';

const AddEventForm = (props) => {

  const {history, createEvent, handlerCancelForm} = props;

  const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
  ];

  const onSubmit = (e) => {
    e.preventDefault();
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
            <Field
              name='category'
              component={SelectInput}
              placeholder='What is your event about?'
              options={category}
            />
            <Field
              name='description'
              component={TextArea}
              rows={3}
              placeholder='Tell is about your event'
            />

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
