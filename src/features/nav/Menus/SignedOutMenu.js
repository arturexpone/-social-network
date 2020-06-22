import React from 'react';
import {Button, Menu} from 'semantic-ui-react';

export const SignedOutMenu = (props) => {

  const {signOut, handleRegister} = props;

  return (
    <Menu.Item position='right'>
      <Button
        basic
        inverted
        content='Login'
        onClick={signOut}
      />
      <Button
        onClick={handleRegister}
        basic
        inverted
        content='Register'
        style={{marginLeft: '0.5em'}}
      />
    </Menu.Item>
  );
}
