import React, { useState, useEffect } from "react";

import FilmList from "./FilmList";
import Search from "./Search";
import Preloader from "./Preloader";

export default function Main() {
    const [input, setInput] = useState('')
    const [data, setData] = useState([]);
    

    const handlSubmit = () => {
        fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
        .then(response => response.json())
        .then(data => setData(data))
    }

    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=man`)
        .then(response => response.json())
        .then(data => setData(data))
    }, []);
    

    return(
    <>
        <Search handlSubmit={handlSubmit} input={input} setInput={setInput}/>
        <div className="content">
            {!data.length ? <Preloader/> : <FilmList data={data}/>}
        </div>
    </>
    )
}