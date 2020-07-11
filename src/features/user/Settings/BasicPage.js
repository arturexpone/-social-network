import React from 'react';

import {Segment, Form, Header, Divider, Button} from 'semantic-ui-react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {addYears} from 'date-fns';

import {updateProfile} from '../../../store/ac';

import {TextInput} from '../../common/form/TextInput';
import {DateInput} from '../../common/form/DateInput';
import {PlaceInput} from '../../common/form/PlaceInput';
import {RadioInput} from '../../common/form/RadioInput';


const BasicPage = (props) => {

  const {pristine, submitting, user,
         updateProfile, handleSubmit} = props;

  return (
    <Segment>
      <Header dividing size='large' content='Basics' />
      <Form onSubmit={handleSubmit(updateProfile)}>
        <Field
          width={8}
          name='displayName'
          type='text'
          component={TextInput}
          placeholder={user.displayName || 'Known As'}
        />
        <Form.Group inline>
          <label>Gender: </label>
          <Field
          name='gender'
          type='radio'
          value='male'
          label='Male'
          component={RadioInput}
          />
          <Field
            name='gender'
            type='radio'
            value='female'
            label='Female'
            component={RadioInput}
          />
        </Form.Group>
        <Field
          width={8}
          name='dateOfBirth'
          component={DateInput}
          placeholder='Date of Birth'
          dateFormat='dd LLL yyyy'
          showYearDropdown={true}
          showMonthDropdown={true}
          dropdownMode='select'
          maxDate={addYears(new Date(), -18)}
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
  }), {updateProfile})
)
(BasicPage);