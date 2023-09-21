const MovieCard = (props) => {
    console.log(props);
    return (
        <>
            <article className="movie-card">
                <h2>{props.title}</h2>
                <p>{props.year}</p>
                <h3>{props.director}</h3>
                <h5>{props.duration}</h5>
                <h4>{props.rate}</h4>
                <div>
                    {props.genre.map((elm, index) => (
                        <p key={index}>{elm}</p>
                    ))}
                    {/* <p>{props.genre[0]}</p>
                    <p>{props.genre[1]}</p>
                    <p>{props.genre[2]}</p>
                    <p>{props.genre[3]}</p>
                    <p>{props.genre[4]}</p>
                    <p>{props.genre[5]}</p>
                    <p>{props.genre[6]}</p> */}
                </div>
            </article>
        </>
    );
};

export default MovieCard;
