import React, { useState, useEffect } from "react";

import FilmLits from "./FilmLits";

export default function Main() {

    const [data, setData] = useState([]);
    

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=girls')
        .then(response => response.json())
        .then(data => setData(data))
    }, []);
    

    return(
        <FilmLits data={data}/>
    )
}