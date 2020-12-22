import { SEND_MESSAGE, RECEIVE_MESSAGE } from '../actionTypes';

const initialState = {
  msg: '',
  data: [],
};

export default function chat(state = initialState, action) {
  switch(action.type) {
    case SEND_MESSAGE: {
      const { msg } = action.payload;
      return {
        
      }
    },
    case RECEIVE_MESSAGE: {

    },

    default:
      return state;
  }
}
