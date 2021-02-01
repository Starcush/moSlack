import React from 'react';
import { GoogleLogin } from 'react-google-login';
import dotenv from 'dotenv';
import styled from 'styled-components';

import GoogleIcon from '../../../google.png';

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

const UserIcon = styled.div`
  content: url(${GoogleIcon});
  width: 18px;
  height: 18px;
  z-index: 3;
`;

export default LoginButton;
