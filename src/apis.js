

const getDataBySortedPage = async () => {
    return await fetch(`https://api.tvmaze.com/shows?page=1`)
        .then(res => res.json())
        .then (data => data.sort((a, b) => {
            if (a.name < b.name) return -1;
        }))
}

const getDataBySortedInput = async (input) => {
    return fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
        .then(response => response.json())
        .then (data => data.sort((a, b) => {
            if (a.show.name < b.show.name) return -1;
        }))
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