import * as type from '../actionTypes';

const initialState = {
  channelInfo: { id: null, name: null },
  channelList: [],
  showDetail: false,
};

export default function channelReducer(state = initialState, action) {
  switch (action.type) {
    case type.UPDATE_CURCHANNEL: {
      const { channelId } = action.payload;
      const channelInfo = state.channelList.find(
        (channel) => channel.id === channelId,
      );
      return {
        ...state,
        channelInfo,
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
