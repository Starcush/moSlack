import React from 'react';
import dotenv from 'dotenv';

import { googleLogin } from '../../../js/apis/api';
import LoginButtonView from '../views/LoginButtonView';

dotenv.config();

const GoogleLoginButton = () => {
  return (
    <LoginButtonView responseGoogle={responseGoogle} />
  );

  async function responseGoogle(res) {
    await googleLogin(res.tokenId);
  }
};

export default GoogleLoginButton;
