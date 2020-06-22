import React from 'react';
import {connect} from 'react-redux';

import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const ModalManager = ({currentModal}) => {

  const modalLookup = {
    LoginModal,
    RegisterModal
  };

  let renderedModal;
  if (currentModal) {
    const {modalType, modalProps} = currentModal;
    const ModalComponent = modalLookup[modalType];

    renderedModal = <ModalComponent {...modalProps}/>
  }

  return (
  <span>
    {renderedModal}
  </span>
  );
};

const mapState = state => ({
  currentModal: state.modals
})

export default connect(mapState)(ModalManager)
