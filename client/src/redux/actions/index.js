import { ADD_NUMBER } from "./types";

export const AddNumber = () => (dispatch) => {
    dispatch({ type: ADD_NUMBER, payload: 1 })
}

// Only For Testing Redux