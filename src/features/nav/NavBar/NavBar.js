import React from 'react';
import {Button, Container, Menu} from 'semantic-ui-react';

import logo from '../../../assets/images/logo.png';
import {Link, NavLink} from 'react-router-dom';

export const NavBar = () => {
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img src={logo} alt='logo' />
          Social Network
        </Menu.Item>
        <Menu.Item as={NavLink} to='/events' name='Events' />
        <Menu.Item as={NavLink} to='/people' name='People' />
        <Menu.Item>
          <Button
            as={Link}
            to='/create-event'
            floated='right'
            positive
            inverted
            content='Добавить пост'
          />
        </Menu.Item>
        <Menu.Item position='right'>
          <Button basic inverted content='Login' />
          <Button basic inverted content="Sign Out" style={{marginLeft: '0.5em'}} />
        </Menu.Item>
      </Container>
    </Menu>
  )
}