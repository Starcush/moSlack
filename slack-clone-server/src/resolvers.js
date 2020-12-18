/* eslint-disable consistent-return */
const { OAuth2Client } = require('google-auth-library');
const dotenv = require('dotenv');

const {
  checkUser,
  insertUser,
  getUserInfo,
  getChannelList,
  addChannel,
} = require('./utils');

dotenv.config();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const root = {
  /**
   * 유저의 정보를 가져오는 resolver
   * @param {string} { tokenId }
   * @returns user information
   */
  user: async ({ tokenId }) => {
    try {
      const ticket = await client.verifyIdToken({
        idToken: tokenId,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const { name, email, picture } = ticket.getPayload();

      // if already exist, return true
      const result = await checkUser(email);

      if (!result) {
        await insertUser(name, email, picture);
      }

      const [rows] = await getUserInfo(email);

      return rows;
    } catch (e) {
      console.log(e);
    }
  },
  /**
   * 채널 목록을 전달해주는 resolver
   * @param: -
   * @returns: channel list
   */
  channelList: async () => {
    try {
      const result = await getChannelList();
      return result;
    } catch (e) {
      console.log('graphql resolver channelList', e);
    }
  },
  /**
   * 채널을 추가해주는 resolver
   * @param {string} channelName 입력한 채널 이름
   * @returns 추가한 후 채널 목록
   */
  addChannel: async (channelName) => {
    try {
      await addChannel(channelName);
      const result = await getChannelList();
      return result;
    } catch (e) {
      console.log('graphql resolver addChannel', e);
    }
  },
};

module.exports = {
  root,
};
