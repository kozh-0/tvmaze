import { PAGE_VALUE_HANDLER, PAGE_VALUE_RESET } from "../types";

const initialState = {
    pageValue: 1
}


export const pageValueReducer = (state = initialState, action) => {

    switch (action.type) {
        case PAGE_VALUE_HANDLER: {
            return {
                ...state,
                pageValue: action.pageValue
            };
        }
        case PAGE_VALUE_RESET: {
            return {
                ...state,
                pageValue: 1
            };
        }
        
        
        default:
            return state;
    }
}

