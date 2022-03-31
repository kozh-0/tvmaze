import { useSelector } from "react-redux";

export default function OneFilmData() {
    
    const data = useSelector(state => state.onePageReducer);

    const {
        name,
        language,
        genres,
        status,
        averageRuntime,
        premiered,
        ended,
        rating: {average},
        image,
        summary,
        officialSite
    } = data;

    return (
        <main className="content content-block">
            <div className="page-top">
                <div className="page-div-img">
                    {!image ? (
                        <img style={{maxWidth: '100%'}} src={`https://via.placeholder.com/500x400.png?text=${name}`} alt={name}/>
                        ) : <img src={image.original} alt={name} className='page-img'/>
                    }
                </div>
                <div className="page-info">
                    <h2>{name}</h2>
                    {language && <p>Language: {language}</p>}
                    {status && <p>Status: {status}</p>}
                    {genres.length ? <p>Genres: {genres.join(', ')}</p> : null}
                    {averageRuntime && <p>Average runtime: {averageRuntime} min</p>}
                    {premiered && <p>Started: {premiered}</p>}
                    {ended && <p>Ended: {ended}</p>}
                    {average && <p>Rating: {average}</p>}
                    {officialSite && (<a 
                        className="btn" 
                        style={{margin: 0}}
                        href={officialSite}
                        >Web site</a>)}
                </div>
            </div>

            <p className="page-text">
                {summary && summary.replaceAll(/(<([^>]+)>)/ig, "")}
            </p>
        </main>
    )
}

