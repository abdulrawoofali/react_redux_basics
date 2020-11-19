import {DECREMENT_SIMPLE_COUNTER, INCREMENT_SIMPLE_COUNTER} from './actionConstants';

const INIT_STATE = {
    counter: 0
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case DECREMENT_SIMPLE_COUNTER: {
            if(state.counter > 0) {
                return {
                    counter: state.counter - 1
                }
            }
            return state;
        }
        case  INCREMENT_SIMPLE_COUNTER: {
            return {
                counter: state.counter + 1
            }
        }
        default:
            return state;
    }
}
