import { combineReducers } from "redux";
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage";

import numberReducer from "./number";
import userReducer from "./user";


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["user"]
}

const rootReducer = combineReducers({
    number: numberReducer,
    user: userReducer
});

export default persistReducer(persistConfig, rootReducer);