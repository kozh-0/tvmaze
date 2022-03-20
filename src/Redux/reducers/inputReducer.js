import { HANDLE_INPUT, INPUT_RESET } from "../types";

const initialState = {
    text: ''
}

export const inputReducer = (state = initialState, action) => {

    
    switch (action.type) {
        case HANDLE_INPUT: {
            return {
                ...state,
                text: action.text
            };
        }
        case INPUT_RESET: {
            return {
                ...state,
                text: ''
            };
        }
        
        
        default:
            return state;
    }
}

