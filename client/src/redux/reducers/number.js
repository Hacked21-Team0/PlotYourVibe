import { ADD_NUMBER } from '../actions/types';

const initalState = {
    currentNumber: 0,
};

const numberReducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_NUMBER:
            let { currentNumber: number } = state;
            return {
                ...state,
                currentNumber: number + action.payload
            }
        default:
            return {
                ...state,
            }
    }
};

export default numberReducer;

// Only For Testing Redux