import { createStore } from 'redux';

import { fetchChannelList } from '../apis/api';
import rootReducer from './reducers/index';

export default function reduxStore() {
  return new Promise((resolve) => {
    fetchChannelList()
      .then((res) => {
        const channelList = res;
        const channelInfo = channelList[0];
        const initialState = {
          channelReducer: {
            channelInfo,
            channelList,
          },
        };
        const store = createStore(rootReducer, initialState);
        resolve(store);
      })
      .catch((err) => {
        throw new Error('error in create store', err);
      });
  });
}
