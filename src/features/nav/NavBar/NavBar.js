import React, {useState} from 'react';
import {Button, Container, Menu} from 'semantic-ui-react';

import {Link, NavLink} from 'react-router-dom';
import {SignedOutMenu} from '../Menus/SignedOutMenu';
import {SignedInMenu} from '../Menus/SignedInMenu';

import logo from '../../../assets/images/logo.png';

export const NavBar = (props) => {

  const {history} = props;

  const initialState = {
    isAuthenticated: true,
  };
  const [state, setState] = useState(initialState);

  const signInAndSignOut = (value) => {
    setState({...state, isAuthenticated: value});
    if (!state.isAuthenticated) {
      history.push('/');
    }
  }


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
        {state.isAuthenticated ? <SignedInMenu signIn={signInAndSignOut}/> : <SignedOutMenu signOut={signInAndSignOut}/>}
      </Container>
    </Menu>
  )
}