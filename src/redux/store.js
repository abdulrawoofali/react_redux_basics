import {createStore, combineReducers} from "redux";
import SimpleCounterReducer from './simpleCounter/reducer';
import MultipleCounterReducer from './customCounter/reducer';


const rootReducer = combineReducers({
    simpleCounter: SimpleCounterReducer,
    multipleCounterReducer: MultipleCounterReducer
});

const store = createStore(rootReducer);
export default store;
