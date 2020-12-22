/* eslint-disable import/prefer-default-export */
import {
  UPDATE_LIST, UPDATE_CHANNELID, SEND_MESSAGE, RECEIVE_MESSAGES,
} from './actionTypes';

export const updateList = (text) => ({
  type: UPDATE_LIST,
  payload: {
    text,
  },
});

export const updateChannelID = (channelID) => ({
  type: UPDATE_CHANNELID,
  payload: {
    channelID,
  },
});

export const sendMessage = (msg) => ({
  type: SEND_MESSAGE,
  payload: {
    msg,
  },
});

export const receiveMessages = (data) => ({
  type: RECEIVE_MESSAGES,
  payload: {
    data,
  },
});
