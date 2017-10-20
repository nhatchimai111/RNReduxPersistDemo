import { combineReducers } from 'redux';

import userState from './UserReducer';
import counterState from './CounterReducer';

export default combineReducers({
    userState,
    counterState
})
