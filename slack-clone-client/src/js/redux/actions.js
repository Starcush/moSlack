/* eslint-disable import/prefer-default-export */
import * as type from './actionTypes';

export const updateList = (text) => ({
  type: type.UPDATE_LIST,
  payload: {
    text,
  },
});

export const updateChannelID = (channelID) => ({
  type: type.UPDATE_CHANNELID,
  payload: {
    channelID,
  },
});

export const updateChannelList = (channelList) => ({
  type: type.UPDATE_CHANNELLIST,
  payload: {
    channelList,
  },
});

export const sendMessage = (msg) => ({
  type: type.SEND_MESSAGE,
  payload: {
    msg,
  },
});

export const receiveMessages = (data) => ({
  type: type.RECEIVE_MESSAGES,
  payload: {
    data,
  },
});
