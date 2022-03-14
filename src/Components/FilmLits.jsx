
import FilmItem from "./FilmItem"

export default function FilmLits({data}) {

    return(
        <>
            {data.map(item => (
                <FilmItem key={item.show.id} {...item}/>
            ))}
        </>
        
    )
}