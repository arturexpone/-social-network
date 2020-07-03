import React from 'react';
import {Button, Container, Menu} from 'semantic-ui-react';
import {withRouter} from 'react-router';
import {compose} from 'redux';
import {connect} from 'react-redux';

import {Link, NavLink} from 'react-router-dom';
import {SignedOutMenu} from '../Menus/SignedOutMenu';
import {SignedInMenu} from '../Menus/SignedInMenu';
import {logout, openModal} from '../../../store/ac';

import logo from '../../../assets/images/logo.png';
import {withFirebase} from 'react-redux-firebase';


const NavBar = (props) => {

  const {history, openModal, auth, firebase: {logout}} = props;


  const handleSignIn = () => {
    openModal('LoginModal');
  };

  const handleRegister = () => {
    openModal('RegisterModal');
  };

  const handleSignOut = () => {
    logout();
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
        {auth.uid && !auth.authError && auth.isLoaded &&
        <>
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
        </>
        }
        {auth.uid && !auth.authError && auth.isLoaded
          ? <SignedInMenu signIn={handleSignOut} currentUser={auth.email}/>
          : <SignedOutMenu handleRegister={handleRegister} signOut={handleSignIn}/>
        }
      </Container>
    </Menu>
  )
};

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default compose(
  withFirebase,
  withRouter,
  connect(mapStateToProps, {openModal, logout})
)(NavBar);