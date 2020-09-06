import {createStore, combineReducers} from 'redux';
import timelineReducer from "../timeline/state";
import friendReducer from "../friend/state";
import createSagaMiddleware from 'redux-saga';

const reducer = combineReducers({
    timeline: timelineReducer,
    friend: friendReducer
});

const store = createStore(reducer);
export default store; 
