import React, { useState, useEffect } from "react";

import FilmList from "./FilmList";
import Search from "./Search";
import Preloader from "./Preloader";
import { getDataBySortedInput, getDataBySortedPage } from "../apis";




export default function Main() {
    const [input, setInput] = useState(localStorage.getItem('input'))
    const [data, setData] = useState([]);
    
    const handlSubmit = () => {
        if (input !== '') {
            getDataBySortedInput(input)
                .then(data => setData(data))
            localStorage.setItem('input', input)
        }
    }
    
    useEffect(() => {
        if (input) {
            getDataBySortedInput(input)
                .then(data => setData(data))
        }
        if (input === '') {
            getDataBySortedPage()
                .then(data => setData(data))
        }
    }, [input]);
    

    return(
        <>
            <Search handlSubmit={handlSubmit} input={input} setInput={setInput}/>
            <div className="content">
                {!data.length ? <Preloader/> : <FilmList data={data}/>}
            </div>
        </>
    )
}