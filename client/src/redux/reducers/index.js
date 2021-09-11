import { combineReducers } from "redux";
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage";

import numberReducer from "./number";


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["number"]
}

const rootReducer = combineReducers({
    number: numberReducer
});

export default persistReducer(persistConfig, rootReducer);

// Only For Testing Redux