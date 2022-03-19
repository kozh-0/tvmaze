
export function handleInputText(text) {
    return {
        type: "HANDLE_INPUT",
        text
    }
}
export function inputReset() {
    return {
        type: "INPUT_RESET",
        text: ''
    }
}


export const getPages = (page) => {
    return async (dispatch) => {
        return await fetch(`https://api.tvmaze.com/shows?page=${page}`)
        .then(res => res.json())
        .then(data => data.sort((a, b) => a.name < b.name ? -1 : 1))
        .then(data => {
            dispatch({
                type: 'GET_PAGES',
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
            console.log(data);
            dispatch({
                type: 'GET_INPUT',
                data
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
}

