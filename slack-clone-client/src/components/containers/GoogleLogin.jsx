import React from 'react';
import { GoogleLogin } from 'react-google-login';
import dotenv from 'dotenv';

import { UserIcon } from '../views/StyledComponents';
import { googleLogin } from '../../js/apis/api';

dotenv.config();

const GoogleLoginButton = () => {
  return (
    <GoogleLogin
      clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
      render={(renderProps) => <UserIcon onClick={renderProps.onClick} />}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
    />
  );

  async function responseGoogle(res) {
    const result = await googleLogin(res.tokenId);
    console.log(result);
  }
};

export default GoogleLoginButton;
