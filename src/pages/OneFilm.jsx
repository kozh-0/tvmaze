import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import OneFilmData from "../Components/OneFilmData";
import Preloader from "../Components/Tools/Preloader";
import { useDispatch } from "react-redux";

import { getId, getName } from "../Redux/thunks";

export default function OneFilm() {
    
    const [isLoaded, setIsLoaded] = useState(false)
    const {goBack} = useHistory();
    const {id, name} = useParams();


    const dispatch = useDispatch();


    useEffect(() => {

        if (id !== 'null') {
            dispatch(getId(id))
            .then(() => setIsLoaded(true))
        }
        if (id === 'null') {
            dispatch(getName(name))
            .then(() => setIsLoaded(true))
        }
    }, [id, name, dispatch])

    return (
        <>
            <button 
                onClick={goBack}
                className='btn'
            >Back</button>
            <div className="film-page">
                {isLoaded ? (
                    <OneFilmData/>
                ) : <Preloader/>}
            </div>
        </>
    )
}

