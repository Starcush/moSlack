/* eslint-disable consistent-return */
const { OAuth2Client } = require('google-auth-library');
const dotenv = require('dotenv');

const { checkUser, insertUser, getUserInfo } = require('./utils');

dotenv.config();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const root = {
  user: async ({ tokenId }) => {
    try {
      console.log('hello');
      const ticket = await client.verifyIdToken({
        idToken: tokenId,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const { name, email, picture } = ticket.getPayload();
      const result = await checkUser(email);
      if (!result) {
        await insertUser(name, email, picture);
      }
      const [rows] = await getUserInfo(email);
      console.log(rows);
      return rows;
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = {
  root,
};
