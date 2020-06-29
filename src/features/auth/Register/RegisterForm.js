import React from 'react';
import {Form, Segment, Button, Label, Divider} from 'semantic-ui-react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {combineValidators, isRequired} from 'revalidate';

import {TextInput} from '../../common/form/TextInput';
import {registerUser} from '../../../store/ac';
import {SocialLogin} from '../SocialLogin/SocialLogin';


const RegisterForm = (props) => {

  const {registerUser, handleSubmit, error, invalid, submitting} = props;

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
          {error && <Label style={{marginBottom: '15px'}} basic color='red'>{error}</Label>}
          <Button fluid size='large' color='teal' disabled={invalid || submitting}>
            Register
          </Button>
          <Divider horizontal>
            Or
          </Divider>
          <SocialLogin />
        </Segment>
      </Form>
    </div>
  );
};

const validate = combineValidators({
  displayName: isRequired('displayName'),
  email: isRequired('email'),
  password: isRequired('password')
})

export default compose(
  reduxForm({form: 'registerForm', validate}),
  connect(null, {registerUser})
)(RegisterForm);