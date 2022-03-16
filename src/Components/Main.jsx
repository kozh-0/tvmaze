import React, { useState, useEffect } from "react";

import FilmList from "./FilmList";
import Search from "./Search";
import Preloader from "./Preloader";
import { getDataByInput } from "../apis";


function storage() {
    const ls = localStorage.getItem('input')
    return ls ? ls : localStorage.setItem('input', 'mans');
}

export default function Main() {
    const [input, setInput] = useState(storage())
    const [data, setData] = useState([]);
    
// поменять на https://api.tvmaze.com/shows?page=1
    const handlSubmit = () => {
        getDataByInput(input)
            .then(data => setData(data))
        localStorage.setItem('input', input)
    }

    useEffect(() => {
        getDataByInput(input)
            .then(data => setData(data))
        localStorage.setItem('input', input)
        // eslint-disable-next-line
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