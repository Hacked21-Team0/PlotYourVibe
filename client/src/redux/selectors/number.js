import { createSelector } from "reselect";

const selectNumber = (state) => state.number;

export const selectCurrentNumber = createSelector(
    [selectNumber],
    (number) => number.currentNumber
);

// Only For Testing Redux