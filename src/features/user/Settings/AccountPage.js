import React from 'react';

import { Segment, Header, Form, Divider, Label, Button, Icon } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import {combineValidators, matchesField, isRequired, composeValidators} from 'revalidate';
import {connect} from 'react-redux';
import {compose} from 'redux';

import {TextInput} from '../../common/form/TextInput';
import {updatePassword} from '../../../store/ac';

const validate = combineValidators({
  newPassword1: isRequired({message: 'Please enter a password'}),
  newPassword2: composeValidators(
    isRequired({message:'Please confirm your new password'}),
    matchesField('newPassword1')({message: 'Passwords do not match'})
  )()
});

const AccountPage = ({ error, updatePassword, handleSubmit, provider }) => {

  const noProvider = (
        <div>
          <Header color='teal' sub content='Change password' />
          <p>Use this form to update your account settings</p>
          <Form onSubmit={handleSubmit(updatePassword)}>
            <Field
              width={8}
              name='newPassword1'
              type='password'
              pointing='left'
              inline={true}
              component={TextInput}
              basic={true}
              placeholder='New Password'
            />
            <Field
              width={8}
              name='newPassword2'
              type='password'
              inline={true}
              basic={true}
              pointing='left'
              component={TextInput}
              placeholder='Confirm Password'
            />
            {error && (
              <Label basic color='red'>
                {error}
              </Label>
            )}
            <Divider />
            <Button size='large' positive content='Update Password' style={{marginBottom: '15px'}}/>
          </Form>
        </div>
  );

  const googleProvider = (
    <div>
      <Header color='teal' sub content='Google Account' />
      <p>Please visit Google to update your account settings</p>
      <Button type='button' color='google plus'>
        <Icon name='google plus' />
        Go to Google
      </Button>
    </div>
  );

  const fbProvider = (
    <div>
      <Header color='teal' sub content='Facebook Account' />
      <p>Please visit Facebook to update your account settings</p>
      <Button type='button' color='facebook'>
        <Icon name='facebook' />
        Go to Facebook
      </Button>
    </div>
  );

  return (
    <Segment>
      <Header dividing size='large' content='Account' />
      {provider === 'password'
          ? noProvider
          : provider === 'google.com'
            ? googleProvider
            : provider === 'facebook.com'
              ? fbProvider : null
      }

    </Segment>
  );
};

export default compose(
  reduxForm({ form: 'account', validate }),
  connect((state) => ({
    provider: state.firebase.auth.providerData[0].providerId
  }), {updatePassword})
)
(AccountPage);