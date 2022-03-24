import { 
    GET_BY_ID, 
    GET_BY_NAME, 
    GET_INPUT, 
    GET_PAGES, 
    HANDLE_INPUT, 
    INPUT_RESET, 
    PAGE_VALUE_HANDLER, 
    PAGE_VALUE_RESET 
} from "./types"

import axios from "axios"

export function pageValueReset() {
    return {
        type: PAGE_VALUE_RESET
    }
}
export function pageValueHandler(pageValue) {
    return {
        type: PAGE_VALUE_HANDLER,
        pageValue
    }
}



// Передаваемая переменная идет в action, если ее нет, хватит type
// INPUT =================================
export function handleInputText(text) {
    return {
        type: HANDLE_INPUT,
        text
    }
}
export function inputReset() {
    return {
        type: INPUT_RESET
    }
}



// FETCH =================================

export const getPages = (page) => {
    return async (dispatch) => {
        return await axios.get(`https://api.tvmaze.com/shows`, {
            params: { page }
        })
        .then(res => res.data.sort((a, b) => a.name < b.name ? -1 : 1))
        .then(data => data.slice(0, 32))
        .then(data => {
            dispatch({
                type: GET_PAGES,
                data
            })
        })
        .catch(err => console.log(err.toJSON()))
    }
}


export const getInput = (input) => {
    return async (dispatch) => {
        return await axios.get(`https://api.tvmaze.com/search/shows?q=${input}`)
        .then (res => res.data.sort((a, b) => a.show.name < b.show.name ? -1 : 1))
        .then(data => {
            dispatch({
                type: GET_INPUT,
                data
            })
        })
        .catch(err => console.log(err.toJSON()))
    }
}




// ONE_PAGE =================================

export const getId = (id) => {
    return async (dispatch) => {
        return await axios.get(`https://api.tvmaze.com/lookup/shows?thetvdb=${id}`)
        .then(res => res.data)
        .then(data => {
            dispatch({
                type: GET_BY_ID,
                data
            })
        })
        .catch(err => console.log(err.toJSON()))
    }
}
export const getName = (name) => {
    return async (dispatch) => {
        return await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${name}`)
        .then(res => res.data)
        .then(data => {
            dispatch({
                type: GET_BY_NAME,
                data
            })
        })
        .catch(err => console.log(err.toJSON()))
    }
}