import { UPDATE_CHANNELID } from '../actionTypes';

const initialState = {
  channelID: 1,
};

export default function updateChannelID(state = initialState, action) {
  switch (action.type) {
  case UPDATE_CHANNELID: {
    const { channelID } = action.payload;
    return {
      channelID,
    };
  }

  default:
    return {
      channelID: state.channelID,
    };
  }
}
