

const getDataBySortedPage = async (page) => {
    return await fetch(`https://api.tvmaze.com/shows?page=${page}`)
        .then(res => res.json())
        .then(data => data.sort((a, b) => a.name < b.name ? -1 : 1))
}

const getDataBySortedInput = async (input) => {
    return fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
        .then(response => response.json())
        .then (data => data.sort((a, b) => a.show.name < b.show.name ? -1 : 1))
}

const getDataByName = async (name) => {
    return await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${name}`)
        .then(res => res.json())
}

const getDataById = async (id) => {
    return await fetch(`https://api.tvmaze.com/lookup/shows?thetvdb=${id}`)
        .then(res => res.json())
}


export { getDataByName, getDataById, getDataBySortedInput, getDataBySortedPage }