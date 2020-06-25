import React from 'react';
import {Form, Segment, Button} from 'semantic-ui-react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {compose} from 'redux';

import {TextInput} from '../../common/form/TextInput';
import {registerUser} from '../../../store/ac';


const RegisterForm = (props) => {

  const {registerUser, handleSubmit} = props;

  return (
    <div>
      <Form size='large' autoComplete='off' onSubmit={handleSubmit(registerUser)}>
        <Segment>
          <Field
            name='displayName'
            type='text'
            component={TextInput}
            placeholder='Known As'
          />
          <Field
            name='email'
            type='text'
            component={TextInput}
            placeholder='Email'
          />
          <Field
            name='password'
            type='password'
            component={TextInput}
            placeholder='Password'
          />
          <Button fluid size='large' color='teal'>
            Register
          </Button>
        </Segment>
      </Form>
    </div>
  );
};

export default compose(
  reduxForm({form: 'registerForm'}),
  connect(null, {registerUser})
)(RegisterForm);