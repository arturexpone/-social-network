import React from 'react';
import {Form, Segment, Button} from 'semantic-ui-react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firebaseConnect} from 'react-redux-firebase';

import {TextInput} from '../../common/form/TextInput';
import {login} from '../../../store/ac';




const LoginForm = (props) => {

  const {login, handleSubmit, firebase} = props;

  const onSubmit = auth => {
    login(auth);
  };

  return (
    <Form error size='large' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
      <Segment>
        <Field
          name='email'
          component={TextInput}
          type='text'
          placeholder='Email Address'
        />
        <Field
          name='password'
          component={TextInput}
          type='password'
          placeholder='password'
        />
        <Button fluid size='large' color='teal'>
          Login
        </Button>
      </Segment>
    </Form>
  );
};

export default compose(
  firebaseConnect(),
  connect(null, {login}),
  reduxForm({form: 'LoginForm'}),
)(LoginForm);
