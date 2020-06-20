import React from 'react';
import {Dropdown, Image, Menu} from 'semantic-ui-react';

import user from '../../../assets/images/user.png'

export const SignedInMenu = (props) => {

  const {signIn} = props;

  return (
      <Menu.Item position="right">
        <Image avatar spaced="right" src={user} />
        <Dropdown pointing="top left" text="Username">
          <Dropdown.Menu>
            <Dropdown.Item text="Create Event" icon="plus" />
            <Dropdown.Item text="My Events" icon="calendar" />
            <Dropdown.Item text="My Network" icon="users" />
            <Dropdown.Item text="My Profile" icon="user" />
            <Dropdown.Item text="Settings" icon="settings" />
            <Dropdown.Item
              text="Sign Out"
              icon="power"
              onClick={() => signIn(false)}
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
  );
}
