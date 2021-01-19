import * as type from '../actionTypes';

const initialState = {
  channel: { id: 1, name: '' },
  channelList: [],
  showDetail: false,
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
  case type.SHOW_CHANNEL_DETAIL: {
    console.log('redux show detail action');
    const { showDetail } = action.payload;
    return {
      ...state,
      showDetail,
    };
  }

  default:
    return state;
  }
}
