
const initialState = {
    pageValue: 5
}


export const pageValueReducer = (state = initialState, action) => {

    console.log(action);
    switch (action.type) {
        /* case "PAGE_RESET": {
            return state
        } */
        case "PAGE_RESET": {
            return {
                ...state,
                pageValue: 1
            };
        }
        
        
        
        default:
            return state;
    }
}

