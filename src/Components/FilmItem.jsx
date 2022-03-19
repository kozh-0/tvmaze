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
            </div>

            <div className="card-info">
                <Link to={`/onefilm/${thetvdb}/${name}`} className="card-title">{name}</Link>
                <div className="card-content">
                    <p>{genres[0]}</p>
                    <p>{premiered ? premiered.substring(0, 4) : null}</p>
                </div>
            </div>
        </div>
    )
}
