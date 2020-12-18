const endpoint = 'http://localhost:4000/graphql';

const getQueryOption = (query) => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify({ query }),
});

/**
 * 채널 목록을 가져오는 api
 * @param: none
 * @return: 채널 목록
 */
const getChannelList = () => {
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
      console.log(err);
    });
};

/**
 * 소셜 로그인때 사용하는 api
 * @param {string} idToken
 * @returns user information
 */
export const googleLogin = (idToken) => {
  const query = `
    query {
      user(tokenId: "${idToken}") {
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
      return user;
    })
    .catch((err) => {
      console.log(err);
    });
};

/**
 * 채널을 추가하는 api
 * @param {*} channelName
 */
export const addChannel = (channelName) => {
  const query = `
    mutation {
      addChannel(name: "${channelName}") {
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
      console.log(err);
    });
};

export default getChannelList;
