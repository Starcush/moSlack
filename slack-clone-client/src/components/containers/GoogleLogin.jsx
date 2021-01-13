import React from 'react';
import { GoogleLogin } from 'react-google-login';
import dotenv from 'dotenv';
import { useLazyQuery } from '@apollo/client';

import { UserIcon } from '../views/StyledComponents';
// import { googleLogin } from '../../js/apis/api';
import { QUERY_USER } from '../../js/apis/query';

dotenv.config();

const GoogleLoginButton = () => {
  const [getGoogleLogin, { data, loading }] = useLazyQuery(QUERY_USER);

  return (
    <GoogleLogin
      clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
      render={(renderProps) => <UserIcon onClick={renderProps.onClick} />}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
    />
  );

  // async function responseGoogle(res) {
  //   await googleLogin(res.tokenId);
  // }
  function responseGoogle(res) {
    console.log('tokenid ::: ', res.tokenId);
    getGoogleLogin({
      variables: { tokenId: res.tokenId },
    });
    if (!loading) {
      const { user } = data;
      window.sessionStorage.setItem('userID', user.id);
      console.log('userid ::: ', user);
    }
  }
};

export default GoogleLoginButton;
