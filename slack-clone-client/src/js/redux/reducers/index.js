import { combineReducers } from 'redux';
import updateList from './updateList';
import updateChannelID from './updateChannelID';

export default combineReducers({ updateList, updateChannelID });
