import React, {useState} from 'react';
import {Button, Container, Menu} from 'semantic-ui-react';
import {withRouter} from 'react-router';

import {Link, NavLink} from 'react-router-dom';
import {SignedOutMenu} from '../Menus/SignedOutMenu';
import {SignedInMenu} from '../Menus/SignedInMenu';

import logo from '../../../assets/images/logo.png';

const NavBar = (props) => {

  const {history} = props;

  const initialState = {
    isAuthenticated: true,
  };
  const [state, setState] = useState(initialState);

  const handleSignIn = () => {
    setState({...state, isAuthenticated: true});
  }

  const handleSignOut = () => {
    setState({...state, isAuthenticated: false});
    history.push('/');
  }

  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img src={logo} alt='logo' />
          Social Network
        </Menu.Item>
        <Menu.Item as={NavLink} exact to='/events' name='Events' />
        <Menu.Item as={NavLink} to='/people' name='People' />
        <Menu.Item>
          <Button
            as={Link}
            to='/create-event'
            floated='right'
            positive
            inverted
            content='Add post'
          />
        </Menu.Item>
        {state.isAuthenticated ? <SignedInMenu signIn={handleSignOut}/> : <SignedOutMenu signOut={handleSignIn}/>}
      </Container>
    </Menu>
  )
};

export default withRouter(NavBar);