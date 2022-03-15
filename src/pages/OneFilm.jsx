import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import OneFilmData from "../Components/OneFilmData";
import Preloader from "../Components/Preloader";



export default function OneFilm() {
    const [data, setData] = useState({});
    const [load, setLoad] = useState(true);
    const {goBack} = useHistory();
    const {name} = useParams();



    useEffect(() => {
        fetch(`https://api.tvmaze.com/singlesearch/shows?q=${name}`)
        .then(res => res.json())
        .then(res => {
            setData(res);
            setLoad(false)
        })
    }, [name])

    return (
        <div className="film-page">
            <button 
                onClick={goBack}
                className='btn'
            >Back</button>
            {!load ? (
                <OneFilmData data={data}/>
            ) : <Preloader/>}
        </div>
    )
}