import moment from 'moment';

import { UPDATE_LIST } from '../actionTypes';

const initialState = {
  list: [
    {
      user: 'jun',
      date: 'someday',
      img: 'img',
      content: 'suallasuallaasdfasdfasdfasdfasdfasdfasdf1',
    },
  ],
};

export default function updateList(state = initialState, action) {
  switch (action.type) {
  case UPDATE_LIST: {
    const { text } = action.payload;

    const today = moment().format('YYYY-MM-DD HH:mm');
    const content = {
      user: 'jun',
      date: today,
      img: 'img',
      content: text,
    };

    return {
      list: [...state.list, content],
    };
  }

  default:
    return state;
  }
}
