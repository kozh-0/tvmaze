import { 
    GET_BY_ID, 
    GET_BY_NAME, 
    GET_INPUT, 
    GET_PAGES, 
    HANDLE_INPUT, 
    INPUT_RESET, 
    PAGE_VALUE_HANDLER, 
    PAGE_VALUE_RESET 
} from "./types";


export const pageValueReset = { type: PAGE_VALUE_RESET };

export const pageValueHandler = (pageValue) => ({
    type: PAGE_VALUE_HANDLER,
    pageValue
});


// INPUT =================================
export const handleInputText = (text) => ({
    type: HANDLE_INPUT,
    text
});

export const inputReset = { type: INPUT_RESET };


// THUNKS =================================
export const getPagesAction = (data) => ({
    type: GET_PAGES,
    data
});

export const getInputAction = (data) => ({
    type: GET_INPUT,
    data
});




// ONE_PAGE =================================

export const getIdAction = (data) => ({
    type: GET_BY_ID,
    data
})

export const getNameAction = (data) => ({
    type: GET_BY_NAME,
    data
})
