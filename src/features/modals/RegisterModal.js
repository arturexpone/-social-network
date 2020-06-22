import React, {Component} from 'react';
import {Modal} from 'semantic-ui-react';
import {connect} from 'react-redux';

import {closeModal} from '../../store/ac';
import RegisterForm from '../auth/Register/RegisterForm';

const RegisterModal = ({closeModal}) => {

    return (
      <Modal
        size='mini'
        open={true}
        onClose={closeModal}
      >
        <Modal.Header>
          Sign Up to Social Network!
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <RegisterForm />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
}

export default connect(null, {closeModal})(RegisterModal);