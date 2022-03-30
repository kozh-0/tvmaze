import React, { useEffect } from "react";
import { Pagination } from "@mui/material";


import FilmList from "./FilmList";
import Search from "./Tools/Search";
import Preloader from "./Tools/Preloader";


import { useSelector, useDispatch } from "react-redux";
import { pageValueHandler } from "../Redux/actions";
import { getPages } from "../Redux/thunks";

export default function Main() {

    const pageValue = useSelector(state => state.pageValueReducer.pageValue);
    const value = useSelector(state => state.fetchReducer);
    const text = useSelector(state => state.inputReducer.text);
    const dispatch = useDispatch()
    
    
    useEffect(() => {
        
        if (text === '') dispatch(getPages(pageValue));
        
    }, [text, pageValue, dispatch]);
    

    return(
        <>
            <Search />
            <div className="content">
                {!value.length ? <Preloader/> : <FilmList/>}
            </div>
                {!text ? <Pagination
                    count={244}
                    page={pageValue}
                    onChange={(_, num) => {
                        dispatch(pageValueHandler(num));
                        document.documentElement.scrollTop = 0;
                    }}
                    color="secondary"
                    size="large"
                    sx={{marginY: 1, marginX: 'auto'}}
                    /> : null}
        </>
    )
}

