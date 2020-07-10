import React from 'react';

import {Segment, Form, Header, Divider, Button} from 'semantic-ui-react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {compose} from 'redux';

import {TextInput} from '../../common/form/TextInput';
import {DateInput} from '../../common/form/DateInput';
import {PlaceInput} from '../../common/form/PlaceInput';



const BasicPage = (props) => {

  const {pristine, submitting, user} = props;

  return (
    <Segment>
      <Header dividing size='large' content='Basics' />
      <Form>
        <Field
          width={8}
          name='displayName'
          type='text'
          component={TextInput}
          placeholder={user.displayName || 'Known As'}
        />
        <Form.Group inline>
          {/* Gender Radio button */}
        </Form.Group>
        <Field
          width={8}
          name='dateOfBirth'
          component={DateInput}
          placeholder='Date of Birth'
        />
        <Field
          name='city'
          placeholder='Home Town'
          options={{types: ['(cities)']}}
          label='Female'
          component={PlaceInput}
          width={8}
        />
        <Divider/>
        <Button disabled={pristine || submitting} size='large' positive content='Update Profile'/>
      </Form>
    </Segment>
  )
}

export default compose(
  reduxForm({form: 'userProfile', enableReinitialize: true}),
  connect((state) => ({
    user: state.firebase.profile
  }), null)
)
(BasicPage);