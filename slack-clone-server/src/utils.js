/* eslint-disable consistent-return */
const moment = require('moment');
const { connection } = require('./db');

const checkUser = async (email) => {
  try {
    const query = 'select * from `USER` where `email` = ?;';
    const param = [email];
    const [rows] = await connection.promise().query(query, param);

    if (rows.length > 0) {
      return true;
    }
    return false;
  } catch (e) {
    console.log(e);
  }
};

const insertUser = async (name, email, imageUrl) => {
  try {
    const query = {
      sql:
        'insert into `USER` (`name`, `email`, `profileImg`) values (?, ?, ?);',
    };
    const param = [name, email, imageUrl];
    await connection.promise().query(query, param);
  } catch (e) {
    console.log(e);
  }
};

const getUserInfoByEmail = async (email) => {
  try {
    const query = 'select * from `USER` where `email` = ?;';
    const param = [email];
    const [rows] = await connection.promise().query(query, param);

    return rows;
  } catch (e) {
    console.log(e);
  }
};

const getChannelList = async () => {
  try {
    const query = 'select * from `CHANNELS`;';
    const [rows] = await connection.promise().query(query);
    return rows;
  } catch (e) {
    console.log(e);
  }
};

const addChannel = async (channelName) => {
  try {
    const query = 'insert into `CHANNELS` (`name`) values (?);';
    const param = [channelName];
    await connection.promise().query(query, param);
  } catch (e) {
    console.log('util addChannel', e);
  }
};

const deleteChannel = async (channelId) => {
  try {
    const query = 'delete from `CHANNELS` where id = (?)';
    const param = [channelId];
    await connection.promise().query(query, param);
  } catch (e) {
    console.log('util delete channel', e);
  }
};

const getChannelContents = async (channelId) => {
  try {
    console.log(`query ${channelId} channel contents`);
    const query = 'select u.name, u.profileImg, c.* from `CHANNEL_CONTENTS` AS c JOIN `USER` AS u ON u.id = c.user_id AND c.channel_id = ? ORDER BY c.time ASC';
    const param = [channelId];
    const [rows] = await connection.promise().query(query, param);
    return rows;
  } catch (e) {
    console.log('util getChannelContents', e);
  }
};

const postContent = async (userID, channelID, content) => {
  try {
    console.log(
      `post content in util userID ${userID} channelID ${channelID} content ${content}`,
    );
    const now = moment().format('YYYY-MM-DD HH:mm');
    const query = 'insert into `CHANNEL_CONTENTS` (`user_id`, `channel_id`, `time`, `content`) values (?, ?, ?, ?);';
    const params = [userID, channelID, now, content];
    const [rows] = await connection.promise().query(query, params);
    return rows;
  } catch (e) {
    console.log('util postContent', e);
  }
};

const getContent = async (insertId) => {
  try {
    console.log(`get content in util insertId ${insertId}`);
    const query = 'select u.name, u.profileImg, c.* from `CHANNEL_CONTENTS` AS c JOIN `USER` AS u ON u.id = c.user_id AND c.id = ?;';
    const param = [insertId];
    const [rows] = await connection.promise().query(query, param);
    return rows;
  } catch (e) {
    console.log('util postContent', e);
  }
};

module.exports = {
  checkUser,
  insertUser,
  getUserInfoByEmail,
  getChannelList,
  addChannel,
  deleteChannel,
  getChannelContents,
  postContent,
  getContent,
};
