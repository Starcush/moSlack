import React from 'react';

import AddChannelContainer from './AddChannelModalContainer';
import LoginErrorContainer from './LoginErrorContainer';

const ModalContainer = ({ type, showModal, handleClose }) => {
  let result;

  if (type === 'addChannel') {
    result = (
      <AddChannelContainer showModal={showModal} handleClose={handleClose} />
    );
  } else if (type === 'loginError') {
    result = (
      <LoginErrorContainer showModal={showModal} handleClose={handleClose} />
    );
  }

  return result;
};

export default ModalContainer;
