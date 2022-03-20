import { combineReducers } from "redux";
import { fetchReducer } from "./reducers/fetchReducer";
import { inputReducer } from "./reducers/inputReducer";
import { onePageReducer } from "./reducers/onePageReducer";


export const rootReducer = combineReducers({
    fetchReducer,
    inputReducer,
    onePageReducer
})