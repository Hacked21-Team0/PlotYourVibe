import { ADD_NUMBER } from "./types";
import { UserActionTypes } from "./types";

export const AddNumber = () => (dispatch) => {
    dispatch({ type: ADD_NUMBER, payload: 1 })
}

export const SetCurrentUser = (user) => (dispatch) => {
    dispatch({ type: UserActionTypes.SET_CURRENT_USER, payload: user })
}
// Only For Testing Redux