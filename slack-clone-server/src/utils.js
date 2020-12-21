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

module.exports = {
  checkUser,
  insertUser,
  getUserInfo,
};
