import React from 'react';
import { GoogleLogin } from 'react-google-login';
import dotenv from 'dotenv';

import { UserIcon } from '../views/StyledComponents';

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

  function responseGoogle(res) {
    console.log(res);
  }
};

export default GoogleLoginButton;
