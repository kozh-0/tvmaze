import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import OneFilmData from "../Components/OneFilmData";
import Preloader from "../Components/Tools/Preloader";
import { getDataById, getDataByName } from "../apis";



export default function OneFilm() {
    const [data, setData] = useState({});
    const [load, setLoad] = useState(true);
    const {goBack} = useHistory();
    const {id, name} = useParams();

    useEffect(() => {
        if (id !== 'null') {
            getDataById(id)
            .then(res => {
                setData(res);
                setLoad(false)
            })
        }
        if (id === 'null') {
            getDataByName(name)
            .then(res => {
                setData(res);
                setLoad(false)
            })
        }
          // eslint-disable-next-line  
    }, [])

    return (
        <>
            <button 
                onClick={goBack}
                className='btn'
            >Back</button>
            <div className="film-page">
                {!load ? (
                    <OneFilmData data={data}/>
                ) : <Preloader/>}
            </div>
        </>
    )
}

/* {!(id === 'null') ? (
                <div className="film-page">
                    {!load ? (
                        <OneFilmData data={data}/>
                    ) : <Preloader/>}
                </div>
            ) : <div className="film-page content"><h2>No result</h2></div>} */
