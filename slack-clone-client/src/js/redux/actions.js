/* eslint-disable import/prefer-default-export */
import { UPDATE_LIST } from './actionTypes';

export const updateList = (text) => ({
  type: UPDATE_LIST,
  payload: {
    text,
  },
});