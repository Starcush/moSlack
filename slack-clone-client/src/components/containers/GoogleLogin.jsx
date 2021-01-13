import React from 'react';
import dotenv from 'dotenv';

import { googleLogin } from '../../js/apis/api';
import LoginButton from '../views/LoginButton';

dotenv.config();

const GoogleLoginButton = () => {
  return (
    <LoginButton responseGoogle={responseGoogle} />
  );

  async function responseGoogle(res) {
    await googleLogin(res.tokenId);
  }
};

export default GoogleLoginButton;
