import { combineReducers } from 'redux';
import updateList from './updateList';
import channelReducer from './channelReducer';

export default combineReducers({ updateList, channelReducer });
