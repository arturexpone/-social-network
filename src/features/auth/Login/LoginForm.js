import React from 'react';
import {Form, Segment, Button, Label, Divider} from 'semantic-ui-react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {compose} from 'redux';

import {TextInput} from '../../common/form/TextInput';
import {auth, socialLogin} from '../../../store/ac';
import {SocialLogin} from '../SocialLogin/SocialLogin';


const LoginForm = (props) => {

  const {auth, handleSubmit, error, socialLogin} = props;

  return (
    <Form size='large' onSubmit={handleSubmit(auth)} autoComplete='off'>
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
        {error && <Label style={{marginBottom: '15px'}} basic color='red'>{error}</Label>}
        <Button fluid size='large' color='teal'>
          Login
        </Button>
        <Divider horizontal>
          Or
        </Divider>
        <SocialLogin login={socialLogin}/>
      </Segment>
    </Form>
  );
};

export default compose(
  connect(null, {auth, socialLogin}),
  reduxForm({form: 'LoginForm'}),
)(LoginForm);
