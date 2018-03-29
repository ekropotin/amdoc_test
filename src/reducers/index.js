import { combineReducers } from 'redux';

import userCards from './userCards';

export const makeRootReducer = () => {
  return combineReducers({ userCards });
};

export default makeRootReducer;
