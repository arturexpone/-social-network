import React from 'react';
import {Button, Menu} from 'semantic-ui-react';

export const SignedOutMenu = (props) => {

  const {signOut} = props;

  return (
    <Menu.Item position='right'>
      <Button
        basic
        inverted
        content='Login'
        onClick={signOut}
      />
      <Button basic inverted content='Register' style={{marginLeft: '0.5em'}}/>
    </Menu.Item>
  );
}
