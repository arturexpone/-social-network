import React from 'react';
import {Form, Segment, Button, Label} from 'semantic-ui-react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {compose} from 'redux';

import {TextInput} from '../../common/form/TextInput';
import {login} from '../../../store/ac';


const LoginForm = (props) => {

  const {login, handleSubmit, error} = props;

  return (
    <Form size='large' onSubmit={handleSubmit(login)} autoComplete='off'>
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
        {error && <Label basic color='red'>{error}</Label>}
        <Button fluid size='large' color='teal'>
          Login
        </Button>
      </Segment>
    </Form>
  );
};

export default compose(
  connect(null, {login}),
  reduxForm({form: 'LoginForm'}),
)(LoginForm);
