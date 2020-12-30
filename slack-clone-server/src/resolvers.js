/* eslint-disable consistent-return */
const { OAuth2Client } = require('google-auth-library');
const dotenv = require('dotenv');

const { PUBSUB_CONTENTS } = require('./constants');

const {
  checkUser,
  insertUser,
  getUserInfo,
  getChannelList,
  addChannel,
  getChannelContents,
  postContent,
  getContent,
} = require('./utils');

dotenv.config();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const resolvers = {
  Query: {
    /**
     * 유저의 정보를 가져오는 resolver
     * @param {string} { tokenId }
     * @returns user information
     */
    user: async (_, { tokenId }) => {
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
    channelContents: async (_, { channelId }) => {
      try {
        console.log('graphql resolver channelContents', channelId);
        const result = await getChannelContents(channelId);
        return result;
      } catch (e) {
        console.log('graphql resolver channelContents', e);
      }
    },
    content: async (_, { insertId }) => {
      try {
        console.log('graphql resolver content', insertId);
        return await getContent(insertId);
      } catch (e) {
        console.log('graphql resolver content', e);
      }
    },
  },
  Mutation: {
    /**
     * 채널을 추가해주는 resolver
     * @param {string} channelName 입력한 채널 이름
     * @returns 추가한 후 채널 목록
     */
    addChannel: async (_, { name }) => {
      try {
        console.log('name in resolvers', name);
        await addChannel(name);
        const result = await getChannelList();
        return result;
      } catch (e) {
        console.log('graphql resolver addChannel', e);
      }
    },
    postContent: async (_, { userID, channelID, content }, { pubsub }) => {
      try {
        console.log('graphql resolver postContent', userID, channelID, content);
        const { insertId } = await postContent(userID, channelID, content);
        const message = await getContent(insertId);
        pubsub.publish(PUBSUB_CONTENTS, {
          chat: message,
        });
        // 제대로 insert가 됐다면 정수가 나올 것
        return message;
      } catch (e) {
        console.log('graphql resolver postContent', e);
      }
    },
  },
  Subscription: {
    chat: {
      subscribe: (_, __, { pubsub }) => {
        console.log('chatting subscribtion');
        return pubsub.asyncIterator(PUBSUB_CONTENTS);
      },
    },
  },
};

module.exports = {
  resolvers,
};
