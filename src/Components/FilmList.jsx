
import FilmItem from "./FilmItem"

export default function FilmList({data}) {

    return(
        <>
            {data.map(item => (
                <FilmItem key={item.show.id} {...item}/>
            ))}
        </>
        
    )
}