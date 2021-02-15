import dotenv from 'dotenv';

dotenv.config();

const endpoint = `http://${process.env.REACT_APP_ENDPOINT}`;
const storage = window.sessionStorage;

const getQueryOption = (query) => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify({ query }),
});

/**
 * 소셜 로그인때 사용하는 api
 * @param {string} idToken
 * @returns user information
 */
export const googleLogin = (idToken) => {
  const query = `
    query {
      user(tokenId: "${idToken}") {
        id
        name
        email
        profileImg
      }
    }
  `;

  return fetch(endpoint, getQueryOption(query))
    .then((res) => res.json())
    .then(({ data }) => {
      const { user } = data;
      storage.setItem('userID', user.id);
      // console.log('fetch google login');
      return user;
    })
    .catch((err) => {
      throw new Error('google login in client api', err);
    });
};

export const fetchChannelList = () => {
  const query = `
    query {
      channelList {
        id
        name
      }
    }
  `;

  return fetch(endpoint, getQueryOption(query))
    .then((res) => res.json())
    .then(({ data }) => {
      const { channelList } = data;
      return channelList;
    })
    .catch((err) => {
      throw new Error('fetch channel list in client api', err);
    });
};

export default googleLogin;
