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

import axios from "axios";

export const pageValueReset = {
    type: PAGE_VALUE_RESET
};

export const pageValueHandler = (pageValue) => ({
    type: PAGE_VALUE_HANDLER,
    pageValue
});



// Передаваемая переменная идет в action, если ее нет, хватит type
// INPUT =================================
export const handleInputText = (text) => ({
    type: HANDLE_INPUT,
    text
});

export const inputReset = {
    type: INPUT_RESET
};


// FETCH =================================

export const getPagesAction = (data) => ({
    type: GET_PAGES,
    data
})


export const getInputAction = (data) => ({
    type: GET_INPUT,
    data
})

/* export const getInput = (input) => (dispatch) => {
    axios.get(`https://api.tvmaze.com/search/shows?q=${input}`)
    .then(res => res.data.sort((a, b) => a.show.name < b.show.name ? -1 : 1))
    .then(data => dispatch(getInputAction(data)))
    .catch(err => console.log(err.toJSON()))
} */





// ONE_PAGE =================================

const getIdAction = (data) => ({
    type: GET_BY_ID,
    data
})

export const getId = (id) => {
    return async (dispatch) => {
        return await axios.get(`https://api.tvmaze.com/lookup/shows?thetvdb=${id}`)
        .then(res => dispatch(getIdAction(res.data)))
        .catch(err => console.log(err.toJSON()))
    }
}
/* export const getId = (id) => {
    return async (dispatch) => {
        return await axios.get(`https://api.tvmaze.com/lookup/shows?thetvdb=${id}`)
        .then(res => dispatch(getIdAction(res.data)))
        .catch(err => console.log(err.toJSON()))
    }
} */


const getNameAction = (data) => ({
    type: GET_BY_NAME,
    data
})

export const getName = (name) => {
    return async (dispatch) => {
        return await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${name}`)
        .then(res => dispatch(getNameAction(res.data)))
        .catch(err => console.log(err.toJSON()))
    }
}
/* export const getName = (name) => {
    return async (dispatch) => {
        return await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${name}`)
        .then(res => dispatch(getNameAction(res.data)))
        .catch(err => console.log(err.toJSON()))
    }
} */