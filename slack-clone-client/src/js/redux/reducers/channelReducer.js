import * as type from '../actionTypes';

const initialState = {
  channel: { id: 1, name: '' },
  channelList: [],
};

export default function channelReducer(state = initialState, action) {
  switch (action.type) {
  case type.UPDATE_CURCHANNEL: {
    const { channel } = action.payload;
    // console.log('channel in reducer ::: ', channel);
    return {
      ...state,
      channel,
    };
  }
  case type.UPDATE_CHANNELLIST: {
    const { channelList } = action.payload;
    return {
      ...state,
      channelList,
    };
  }

  default:
    return state;
  }
}
