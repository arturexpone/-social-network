import React from 'react';
import {Button, Form, Grid, Header, Segment} from 'semantic-ui-react';
import {connect} from 'react-redux';
import cuid from 'cuid';
import {reduxForm, Field} from 'redux-form';
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from 'revalidate';

import {createEvent, updateEvent} from '../../../store/ac';
import {TextInput} from '../../common/form/TextInput';
import {TextArea} from '../../common/form/TextArea';
import {SelectInput} from '../../common/form/SelectInput';
import {DateInput} from '../../common/form/DateInput';
import {PlaceInput} from '../../common/form/PlaceInput';

const EventForm = (props) => {

  const {
    history, createEvent,
    handlerCancelForm, handleSubmit,
    initialValues, updateEvent,
    invalid, submitting, pristine
  } = props;

  const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
  ];

  const onSubmit = values => {
    if (initialValues.id) {
      updateEvent(values);
      history.goBack();
    } else {
      console.log(values)
      const newEvent = {
        ...values,
        id: cuid(),
        hostPhotoURL: 'https://cache.desktopnexus.com/thumbseg/2076/2076205-thumbnail.jpg',
        hostedBy: 'Anonym',
        attendees: []
      };
      createEvent(newEvent);
      history.goBack();
    }
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <Segment>

          <Header sub color='teal' children='Event Details'></Header>
          <Form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
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

            <Header sub color='teal' content='Event Location Details'></Header>
            <Field name='city' component={PlaceInput} placeholder='Event City'/>
            <Field name='venue' component={TextInput} placeholder='Event Venue'/>
            <Field
              name='date'
              component={DateInput}
              placeholder='Event Date'
              dateFormat='dd LLL yyyy h:mm a'
              showTimeSelect
              timeFormat='HH:mm'
            />
            <Button positive type='submit' disabled={invalid || submitting || pristine}>
              {initialValues.id ? 'Edit' : 'Add'}
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

const validate = combineValidators({
  title: isRequired({message: 'The event title is required'}),
  category: isRequired({message: 'The category is required'}),
  description: composeValidators(
    isRequired({message: 'Please enter a description'}),
    hasLengthGreaterThan(4)({message: 'Description needs to be at least 5 characters'}))(),
  city: isRequired('city'),
  venue: isRequired('venue'),
  date: isRequired('date')
});

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {};
  if (eventId && state.events.length > 0) {
    event = state.events.filter(e => eventId === e.id)[0];
  }

  return {
    initialValues: event
  }
};

export default connect(
  mapStateToProps,
  {createEvent, updateEvent})
(reduxForm({form: 'eventForm', validate})(EventForm));
