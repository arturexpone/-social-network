import React, {useState} from 'react';
import {Button, Container, Menu} from 'semantic-ui-react';
import {withRouter} from 'react-router';
import {compose} from 'redux';
import {connect} from 'react-redux';

import {Link, NavLink} from 'react-router-dom';
import {SignedOutMenu} from '../Menus/SignedOutMenu';
import {SignedInMenu} from '../Menus/SignedInMenu';
import {openModal} from '../../../store/ac';

import logo from '../../../assets/images/logo.png';



const NavBar = (props) => {

  const {history, openModal} = props;

  const initialState = {
    isAuthenticated: false,
  };
  const [state, setState] = useState(initialState);

  const handleSignIn = () => {
    openModal('LoginModal');
  };

  const handleRegister = () => {
    openModal('RegisterModal');
  };

  const handleSignOut = () => {
    setState({...state, isAuthenticated: false});
    history.push('/');
  };

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
        {state.isAuthenticated
          ? <SignedInMenu signIn={handleSignOut}/>
          : <SignedOutMenu handleRegister={handleRegister} signOut={handleSignIn}/>
        }
      </Container>
    </Menu>
  )
};

export default compose(
  withRouter,
  connect(null, {openModal})
)(NavBar);