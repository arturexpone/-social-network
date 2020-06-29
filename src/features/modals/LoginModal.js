import React, {Component} from 'react';
import {Modal} from 'semantic-ui-react';
import {connect} from 'react-redux';

import {closeModal} from '../../store/ac';
import LoginForm from '../auth/Login/LoginForm';

const LoginModal = (props) => {

  const {closeModal} = props;

    return (
      <Modal
        size='mini'
        open={true}
        onClose={closeModal}
      >
        <Modal.Header>
          Login to Social Network
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <LoginForm />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
}

export default connect(null, {closeModal})(LoginModal);