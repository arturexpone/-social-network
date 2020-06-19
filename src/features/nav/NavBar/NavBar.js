import React from 'react';
import {Button, Container, Menu} from 'semantic-ui-react';

import logo from '../../../assets/images/logo.png';

export const NavBar = () => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img src={logo} alt="logo" />
          Social Network
        </Menu.Item>
        <Menu.Item name="Events" />
        <Menu.Item>
          <Button floated="right" positive inverted content="Create Event" />
        </Menu.Item>
        <Menu.Item position="right">
          <Button basic inverted content="Login" />
          <Button basic inverted content="Sign Out" style={{marginLeft: '0.5em'}} />
        </Menu.Item>
      </Container>
    </Menu>
  )
}