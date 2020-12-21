import { testQuery } from './querys';

const endpoint = 'http://localhost:4000/graphql';

const getQueryOption = (query) => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify({ query }),
});

const getChannelList = () => {
  const option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ query: testQuery }),
  };

  fetch(endpoint, option)
    .then((res) => res.json())
    .then(({ data }) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// 소셜 로그인을 했을 때 클릭. tokenId를 전달
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
      // const { name, email, profileImg } = user;
      return user;
      // console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getChannelList;
