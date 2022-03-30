import axios from "axios";

import { 
    getPagesAction, 
    getInputAction,
    getIdAction,
    getNameAction
} from "./actions";


export const getPages = (page) => (dispatch) => {
    axios.get(`https://api.tvmaze.com/shows`, {
        params: { page }
    })
    .then(res => res.data.sort((a, b) => a.name < b.name ? -1 : 1))
    .then(data => data.slice(0, 32))
    .then(data => dispatch(getPagesAction(data)))
    .catch(err => console.log(err.toJSON()))
};


export const getInput = (input) => (dispatch) => {
    axios.get(`https://api.tvmaze.com/search/shows?q=${input}`)
    .then(res => res.data.sort((a, b) => a.show.name < b.show.name ? -1 : 1))
    .then(data => dispatch(getInputAction(data)))
    .catch(err => console.log(err.toJSON()))
};


export const getId = (id) => async (dispatch) => {
    await axios.get(`https://api.tvmaze.com/lookup/shows?thetvdb=${id}`)
    .then(res => dispatch(getIdAction(res.data)))
    .catch(err => console.log(err.toJSON()))
}



export const getName = (name) => async (dispatch) => {
    await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${name}`)
    .then(res => dispatch(getNameAction(res.data)))
    .catch(err => console.log(err.toJSON()))
}
