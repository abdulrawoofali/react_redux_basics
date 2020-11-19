import {INCREMENT_CUSTOM_AMOUNT} from './actionConstants';

export const multipleCounterIncrementActionCreator = (number) => {
    return {
        type: INCREMENT_CUSTOM_AMOUNT,
        payload: number
    }
};
