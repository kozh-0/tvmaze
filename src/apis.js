

const getDataByInput = async (input) => {
    return fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
        .then(response => response.json())
}

const getDataByName = async (name) => {
    return await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${name}`)
        .then(res => res.json())
}

const getDataById = async (id) => {
    return await fetch(`https://api.tvmaze.com/lookup/shows?thetvdb=${id}`)
        .then(res => res.json())
}

export { getDataByName, getDataById, getDataByInput }