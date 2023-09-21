import { useParams } from "react-router-dom";
import BackButton from "../components/BackBtn";
import movies from "../assets/data";

const MovieDetails = () => {
    const params = useParams();
    const movieItem = movies.find((item) => item.title === params.movie);
    const movieItem2 = movies.filter((item) => item.title === params.movie);
    console.log("Params", params);
    console.log("Detail-find", movieItem2);
    console.log("Detail-filter", movieItem);

    return (
        <section className="details">
            <div className="detail-box">
                <article className="details-content">
                    <h1>{movieItem.title}</h1>
                    <h3>{movieItem.year}</h3>
                    <h3>{movieItem2[0].director}</h3>
                    <h3>{movieItem2[0].duration}</h3>
                </article>
                <h2>{movieItem2[0].rate}</h2>
                <BackButton />
            </div>
        </section>
    );
};

export default MovieDetails;
