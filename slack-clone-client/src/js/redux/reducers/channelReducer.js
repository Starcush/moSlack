import { UPDATE_CHANNELID, UPDATE_CHANNELLIST } from '../actionTypes';

const initialState = {
  channelID: 1,
  channelList: [],
};

export default function channelReducer(state = initialState, action) {
  switch (action.type) {
  case UPDATE_CHANNELID: {
    const { channelID } = action.payload;
    return {
      ...state,
      channelID,
    };
  }
  case UPDATE_CHANNELLIST: {
    const { channelList } = action.payload;
    return {
      ...state,
      channelList,
    };
  }

  default:
    return {
      channelID: state.channelID,
    };
  }
}
