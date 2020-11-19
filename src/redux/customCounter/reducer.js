import {INCREMENT_CUSTOM_AMOUNT} from './actionConstants';

const INIT_STATE = {
    multipleCounter: 0
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case INCREMENT_CUSTOM_AMOUNT: {
            return {

            }
        }
        default:
            return state;
    }
}
