import {DECREMENT_SIMPLE_COUNTER, INCREMENT_SIMPLE_COUNTER} from './actionConstants';
export const incrementSimpleCounterActionCreator = () => {
    return {
        type: INCREMENT_SIMPLE_COUNTER
    }
};

export const decrementSimpleCounterActionCreator = () => {
    return {
        type: DECREMENT_SIMPLE_COUNTER
    }
};
