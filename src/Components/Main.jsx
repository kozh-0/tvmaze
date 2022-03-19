import React, { useState, useEffect } from "react";
import { getDataBySortedInput, getDataBySortedPage } from "../apis";
import { Pagination, /* PaginationItem ,*/ Stack} from "@mui/material";
// import { Link } from "react-router-dom";

import FilmList from "./FilmList";
import Search from "./Tools/Search";
import Preloader from "./Tools/Preloader";


// import { useSelector, useDispatch } from "react-redux";


export default function Main(props) {

    console.log(props);

    const [data, setData] = useState([]);
    const [input, setInput] = useState(localStorage.getItem('input') ? localStorage.getItem('input') : '')
    const [page, setPage] = useState(1);


    /* const value = useSelector(state => state)
    console.log(value); */

    const handlSubmit = () => {
        if (input !== '') {
            getDataBySortedInput(input)
                .then(data => setData(data))
        }
    }
    
    useEffect(() => {
        getDataBySortedInput(input)
        .then(data => setData(data))
        localStorage.setItem('input', input)
        
        
        if (input === '') {
            getDataBySortedPage(page)
            .then(data => setData(data))
        }
    }, [input, page]);
    

    return(
        <>
            <Search handlSubmit={handlSubmit} input={input} setInput={setInput}/>
            <div className="content">
                {!data.length ? <Preloader/> : <FilmList data={data}/>}
            </div>
            <Stack>
                {!input ? <Pagination
                    count={244}
                    page={page}
                    onChange={(_, num) => setPage(num)}
                    sx={{marginY: 1, marginX: 'auto'}}
                    styles={{justifyContent: 'center'}}
                    /* renderItem={(item) => {
                        <PaginationItem
                            component={Link}
                            to={`/?page=${item.page}`}
                            {...item}
                        />
                    }} */
                    /> : null}

            </Stack>
        </>
    )
}

