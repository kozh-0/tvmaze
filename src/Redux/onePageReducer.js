

export const onePageReducer = (state = {}, action) => {
    
    switch (action.type) {
        case 'GET_BY_ID': {
            return action.data;
        }
        case 'GET_BY_NAME': {
            return action.data;
        }
        
        default:
            return state;
    }
}

