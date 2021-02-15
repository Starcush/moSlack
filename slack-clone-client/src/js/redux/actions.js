/* eslint-disable import/prefer-default-export */
import * as type from './actionTypes';

export const updateCurChannel = (channelId) => ({
  type: type.UPDATE_CURCHANNEL,
  payload: {
    channelId,
  },
});

export const updateChannelList = (channelList) => ({
  type: type.UPDATE_CHANNELLIST,
  payload: {
    channelList,
  },
});

export const showChannelDetail = (showDetail) => ({
  type: type.SHOW_CHANNEL_DETAIL,
  payload: {
    showDetail,
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
