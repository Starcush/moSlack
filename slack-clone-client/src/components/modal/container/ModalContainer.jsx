import React from 'react';

import AddChannelContainer from './AddChannelModalContainer';
import LoginErrorContainer from './LoginErrorContainer';
import CheckModalContainer from './CheckModalContainer';

const ModalContainer = (props) => {
  let result;

  if (props.type === 'addChannel') {
    result = (
      <AddChannelContainer showModal={props.showModal} handleClose={props.handleClose} />
    );
  } else if (props.type === 'loginError') {
    result = (
      <LoginErrorContainer showModal={props.showModal} handleClose={props.handleClose} />
    );
  } else if (props.type === 'check') {
    result = (
      <CheckModalContainer
        showModal={props.showModal}
        handleCheckModal={props.handleCheckModal}
        deleteChannel={props.deleteChannel}
      />
    );
  }

  return result;
};

export default ModalContainer;
