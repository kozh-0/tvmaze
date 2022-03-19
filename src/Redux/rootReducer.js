import { combineReducers } from "redux";
import { testReducer } from "./testReducer";
import { inputReducer } from "./inputReducer";


export const rootReducer = combineReducers({
    testReducer,
    inputReducer
})