import React, { useState, useEffect } from "react";
import { Pagination } from "@mui/material";


import FilmList from "./FilmList";
import Search from "./Tools/Search";
import Preloader from "./Tools/Preloader";


import { useSelector, useDispatch } from "react-redux";
import { getPages } from "../Redux/actions";

export default function Main() {

    const [page, setPage] = useState(1);


    const value = useSelector(state => state.testReducer);
    const text = useSelector(state => state.inputReducer.text);
    const dispatch = useDispatch()



    
    
    useEffect(() => {
        
        localStorage.setItem('input', text);
        if (text === '') dispatch(getPages(page));
        
    }, [text, page, dispatch]);
    

    return(
        <>
            <Search />
            <div className="content">
                {!value.length ? <Preloader/> : <FilmList/>}
            </div>
                {!text ? <Pagination
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
        </>
    )
}

