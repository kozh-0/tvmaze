import { GET_BY_ID, GET_BY_NAME, GET_INPUT, GET_PAGES, HANDLE_INPUT, INPUT_RESET } from "./types"






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
        return await fetch(`https://api.tvmaze.com/shows?page=${page}`)
        .then(res => res.json())
        .then(data => data.sort((a, b) => a.name < b.name ? -1 : 1))
        .then(data => data.slice(0, 32))
        .then(data => {
            dispatch({
                type: GET_PAGES,
                data
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
}


export const getInput = (input) => {
    return async (dispatch) => {
        return await fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
        .then(response => response.json())
        .then (data => data.sort((a, b) => a.show.name < b.show.name ? -1 : 1))
        .then(data => {
            dispatch({
                type: GET_INPUT,
                data
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
}




// ONE_PAGE =================================

export const getId = (id) => {
    return async (dispatch) => {
        return await fetch(`https://api.tvmaze.com/lookup/shows?thetvdb=${id}`)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: GET_BY_ID,
                data
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
}
export const getName = (name) => {
    return async (dispatch) => {
        return await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${name}`)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: GET_BY_NAME,
                data
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
}