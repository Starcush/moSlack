import React from 'react';

import LoginErrorView from '../view/LoginErrorView';

// todo : focus to button with useRef
const LoginErrorContainer = ({ showModal, handleClose }) => (
  <LoginErrorView showModal={showModal} handleClose={handleClose} />
);

export default LoginErrorContainer;
