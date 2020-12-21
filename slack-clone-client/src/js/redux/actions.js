/* eslint-disable import/prefer-default-export */
import { UPDATE_LIST, UPDATE_CHANNELID } from './actionTypes';

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
