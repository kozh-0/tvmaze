

export const fetchReducer = (state = [], action) => {

    
    switch (action.type) {
        case 'GET_PAGES': {
            return action.data;
        }
        case 'GET_INPUT': {
            return action.data;
        }
        
        default:
            return state;
    }
}


