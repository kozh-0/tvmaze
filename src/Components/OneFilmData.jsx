

export default function OneFilmData({data}) {
    console.log(data);
    const {
        name,
        language,
        genres,
        status,
        averageRuntime,
        premiered,
        ended,
        rating: {average},
        webChannel,
        image,
        summary,

    } = data;
    console.log(webChannel);
    return (
        <div>
            <div className="page-top">
                <div className="page-div-img">
                    {!image ? (
                        <img src={`https://via.placeholder.com/500x400.png?text=${name}`} alt={name}/>
                        ) : <img src={image.original} alt={name} className='page-img'/>
                    }
                </div>
                <div>
                    <h2>{name}</h2>
                    {language ? <p>Language: {language}</p> : null}
                    {/* <p>Country: {country}</p> */}
                    {status? <p>Status: {status}</p> : null}
                    {genres.length ? <p>Genres: {genres.join(', ')}</p> : null}
                    {averageRuntime ? <p>Average runtime: {averageRuntime} min</p> : null}
                    {premiered ? <p>Started: {premiered}</p> : null}
                    {ended ? <p>Ended: {ended}</p> : null}
                    {average ? <p>Rating: {average}</p> : null}
                </div>
            </div>

            <p>
                { summary.startsWith('<') ? summary.slice(3, -4) : summary }
            </p>
        </div>
    )
}

