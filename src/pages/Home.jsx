import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import movies from "../assets/data"
import MovieCard from "../components/MovieCard";

const Home = () => {
    // Daten zwischenspeichern
    const [data, setData] = useState(movies)
    // console.log("data abfrage", data);

    // Inputfeld speichern
    const [searchInput, setSeachInput] = useState("")

    // Sotrierfunktionen
    const dateSortUp = () =>{
        const sortedContent = [...data].sort((a, b) => a.year - b.year)
        setData(sortedContent)
    }

    const dateSortDown = () =>{
        const sortedContent = [...data].sort((a, b) => b.year - a.year)
        setData(sortedContent)
    }

    const alphabeticSort = () =>{
        const sortedContent = [...data].sort((a, b) => a.title.localeCompare(b.title))
        setData(sortedContent)
    }

    const revAlphabeticSort = () =>{
        const sortedContent = [...data].sort((a, b) => b.title.localeCompare(a.title))
        setData(sortedContent)
    }

    const rateSort = () =>{
        const sortedContent = [...data].sort((a, b) => b.rate - a.rate)
        setData(sortedContent)
    }
    
    // Eingabe Suchfunktion
    const inputSearch = (e) =>{
        setSeachInput(e.target.value)
    }
    
    // nach Genre filtern
    const [genre, setGenre] = useState()
    let key;

    useEffect(() => {
        if(genre == "" || genre == undefined){
            return
        } else {
            let newData = data.filter(function(movie){
                for(key in movie){
                  if(movie[key].includes(genre)){
                    return movie;
                    }
                   }
                  });
            // console.log(newData);
            setData(newData)
        }
    },[genre])
    
    // Datenfilterung
    const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase()))

    // console.log("filter",filteredData);
    console.log(filteredData);
    return ( 
            <section className="welcome-section">
                <h1>Wilkommen auf der Movie Database</h1>
                <article className="search-field">
                    <button onClick={dateSortUp}>Sort by Date Ascending</button>  
                    <button onClick={dateSortDown}>Sort by Date Descending</button>  
                    <button onClick={rateSort}>Best Rate</button>  
                    <button onClick={alphabeticSort}>A-Z</button>  
                    <button onClick={revAlphabeticSort}>Z-A</button>
                    <select onChange={(e) => {setData(filteredData);setGenre(e.target.value)}} name="" id="genre">
                        <option value="">Choose Genre</option>
                        <option value="Crime">Crime</option>
                        <option value="Drama">Drama</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Action">Action</option>
                        <option value="Biography">Biography</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Western">Western</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Romance">Romance</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                        <option value="Family">Family</option>
                        <option value="War">War</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Animation">Animation</option>
                        <option value="Horror">Horror</option>
                        <option value="Music">Music</option>
                        <option value="Musical">Musical</option>
                        <option value="Film-Noir">Film-Noir</option>
                        <option value="Sport">Sport</option>
                    </select>
                    <input type="text" value={searchInput} onChange={inputSearch} placeholder="Movie search" />
                </article>
                {filteredData ? (
                <article className="moviecard-gallery">
                    {filteredData.map((item, index) =>(
                        <div key={index}>
                            <NavLink to={`/${item.title}`}>
                                <MovieCard
                                title={item.title}
                                year={item.year}
                                director={item.director}
                                duration={item.duration}
                                rate={item.rate}
                                genre={item.genre}
                                />
                            </NavLink>
                        </div>
                    ))}
                </article>
                 ) : (
                 <p>Loading...</p>
             )} 
            </section>
            
     );
}
 
export default Home;
