

export default function FilmItem(props) {

    const {
        score,
        show: {
            image,
            genres,
            name,

        }
    } = props;
    
    // console.log(image ? );
    return (
        <div className="card">
            <div className="card-image">
                {!image ? (
                    <img src={`https://via.placeholder.com/500x400.png?text=${name}`} alt={name}/>
                    ) : <img src={image.medium} alt={name}/>
                }
            </div>

            <div className="card-info">
                <span className="card-title">{name}</span>
                <div className="card-content">
                    <p>{genres[0]}</p>
                    <p>{score.toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}
