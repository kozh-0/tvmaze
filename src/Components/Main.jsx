import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import FilmList from "./FilmList";
import Search from "./Tools/Search";
import Preloader from "./Tools/Preloader";
import { getDataBySortedInput, getDataBySortedPage } from "../apis";




function Main(props) {
    const [input, setInput] = useState(localStorage.getItem('input'))
    const [data, setData] = useState([]);
    const [currentPage] = useState(1);





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
            getDataBySortedPage(currentPage)
                .then(data => setData(data))
        }
    }, [input, currentPage]);
    

    return(
        <>
            <Search handlSubmit={handlSubmit} input={input} setInput={setInput}/>
            <div className="content">
                {!data.length ? <Preloader/> : <FilmList data={data}/>}
            </div>
            {props.likes}
        </>
    )
}


function mapStateToProps(state) {
    console.log('mapStateToProps > ', state);
    return {
        likes: state.likes
    }
}

export default connect(mapStateToProps)(Main);