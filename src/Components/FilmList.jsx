
import { useSelector } from "react-redux";
import FilmItem from "./FilmItem";
import MainPages from "./MainPages";

export default function FilmList() {

    const data = useSelector(state => state.fetchReducer)
    
    return(
        <>
            {data[0].show ? (data.map(item => (
                <FilmItem key={item.show.id} {...item.show}/>
            ))) : (data.map(item => (
                <MainPages key={item.id} {...item}/>
            )))}
        </>
        
    )
}