import { Link } from "react-router-dom";

export default function FilmItem(props) {
    // console.log(props);
    const {
            image,
            genres,
            name,
            premiered,
            externals: {thetvdb}
        } = props;
    

    return (
        <div className="card">
            <div className="card-image">
                {!image ? (
                    <img src={`https://via.placeholder.com/500x400.png?text=${name}`} alt={name}/>
                    ) : <img src={image.medium} alt={name}/>
                }
                <div className="card-content">
                    {genres[0] ? <p className="card-content-info">{genres[0]}</p> : null}
                    {premiered ? <p className="card-content-info">{premiered ? premiered.substring(0, 4) : null}</p> : null}
                </div>
            </div>

            <Link to={`/onefilm/${thetvdb}/${name}`} className="card-info">
                <div className="card-title"> {name} </div>
            </Link>
        </div>
    )
}
