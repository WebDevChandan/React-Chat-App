import { useEffect, useState } from 'react'
import './App.css';
import SearchIcon from './assets/search.svg'
import MovieCard from './MovieCard';

/*
Source: https://www.omdbapi.com/
API Key: c032e2d7
Example: https://www.omdbapi.com/?t=wwe&apikey=c032e2d7
*/

const API_URL = 'https://www.omdbapi.com/?apikey=c032e2d7';

function App() {
  const [movieName, setMovieName] = useState("");
  const [moviesData, setMoviesData] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);

    const data = await response.json();
    setMoviesData(data.Search);
  }

  useEffect(() => {
    searchMovies('Avengers');
  }, []);

  return (
    <div className="app">
      <h1>MovieCardSearch</h1>

      <div className="search">
        <input type="text" placeholder="Search for movies" value={movieName} onChange={(e) => {setMovieName(e.target.value)}
        } onKeyPress={(e) => { e.key === "Enter" ? searchMovies(movieName) : null }} />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(movieName)} />
      </div>

      {moviesData?.length > 0
        ? (<div className="container">
          {moviesData.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </div>
        ) : <div className="empty">
          <h2>No Movies found</h2>
        </div>
      }
    </div>
  )
}

export default App
