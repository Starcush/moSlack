/* eslint-disable consistent-return */
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

const getUserInfo = async (email) => {
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
    const param = [channelName.name];
    await connection.promise().query(query, param);
  } catch (e) {
    console.log('util addChannel', e);
  }
};

const getChannelContents = async (channelId) => {
  try {
    console.log(`query ${channelId} channel contents`);
    const query = 'select * from `CHANNEL_CONTENTS` where channel_id = ?';
    const param = [channelId];
    const [rows] = await connection.promise().query(query, param);
    return rows;
  } catch (e) {
    console.log('util getChannelContents', e);
  }
};

module.exports = {
  checkUser,
  insertUser,
  getUserInfo,
  getChannelList,
  addChannel,
  getChannelContents,
};
