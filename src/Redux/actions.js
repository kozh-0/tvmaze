// import { getDataBySortedPage } from "./actions";




export const getPages = () => {
    return async (dispatch, getState) => {
        return await fetch(`https://api.tvmaze.com/shows?page=1`)
        .then(res => res.json())
        .then(data => data.sort((a, b) => a.name < b.name ? -1 : 1))
        .then(data => {
            console.log(data);
            dispatch({
                type: 'GET_PAGES',
                payload: data
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
}

