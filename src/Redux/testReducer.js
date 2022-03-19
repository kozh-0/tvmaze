
// import { getPages } from "./actions";

export const testReducer = (state = [], action) => {
    // каждый кейс это как изменится стор
    // console.log(action);
    
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







    /* const initialState = [
        {
            kek: 1,
            lol: 'asda'
        },
        {
            kek: 2,
            lol: 'qwqw'
        },
        {
            kek: 3,
            lol: 'ikik'
        },
    ] */