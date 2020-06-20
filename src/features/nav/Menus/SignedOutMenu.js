import React from 'react';
import {Button, Container, Menu} from 'semantic-ui-react';

export const SignedOutMenu = (props) => {

  const {signOut} = props;

  return (
    <Menu.Item position='right'>
      <Button
        basic
        inverted
        content='Login'
        onClick={() => signOut(true)}
      />
      <Button basic inverted content='Register' style={{marginLeft: '0.5em'}}/>
    </Menu.Item>
  );
}
