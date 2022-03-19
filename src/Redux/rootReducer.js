import { combineReducers } from "redux";
import { fetchReducer } from "./fetchReducer";
import { inputReducer } from "./inputReducer";
import { onePageReducer } from "./onePageReducer";


export const rootReducer = combineReducers({
    fetchReducer,
    inputReducer,
    onePageReducer
})