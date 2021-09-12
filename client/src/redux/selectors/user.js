import { createSelector } from "reselect";

const selectUser = (state) => state.user; //name of reducer file

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
);