import dotenv from 'dotenv';

dotenv.config();

// const endpoint = 'http://localhost:4000/';
const endpoint = 'http://15.164.58.98:4000/';
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
 * 채널 목록을 가져오는 api
 * @param: none
 * @return: 채널 목록
 */
export const getChannelList = () => {
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
      throw new Error('get channel list in client api', err);
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
    .then(({ data }) => data.addChannel)
    .catch((err) => {
      throw new Error('add channel in client api', err);
    });
};

/**
 * channel에 있는 모든 내용들을 불러온다
 * @param {Int} channelId
 * @returns [contents]
 */
export const getChannelContents = (channelId) => {
  const query = `query {
    channelContents(channelId: ${channelId}) {
      id
      user_id
      channel_id
      time
      content
      name
      profileImg
    }
  }`;

  return fetch(endpoint, getQueryOption(query))
    .then((res) => res.json())
    .then(({ data }) => {
      const { channelContents } = data;
      return channelContents;
    })
    .catch((err) => {
      throw new Error('get channel contents in client api', err);
    });
};

export const postContent = (channelID, content) => {
  const userID = storage.getItem('userID');
  const query = `
    mutation {
      postContent(userID: ${userID}, channelID: ${channelID} , content: "${content}") {
        id
        user_id
        channel_id
        time
        content
      }
    }
  `;

  return fetch(endpoint, getQueryOption(query))
    .then((res) => res.json())
    .then(({ data }) => data.postContent)
    .catch((err) => {
      throw new Error('post content in client api', err);
    });
};

export default getChannelList;
