import React from 'react';
import { GoogleLogin } from 'react-google-login';
import dotenv from 'dotenv';

import { UserIcon } from './StyledComponents';

dotenv.config();

const LoginButton = ({ responseGoogle }) => (
  <GoogleLogin
    clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
    render={(renderProps) => <UserIcon onClick={() => renderProps.onClick()} />}
    buttonText="Login"
    onSuccess={(response) => responseGoogle(response)}
    onFailure={responseGoogle}
  />
);

export default LoginButton;
