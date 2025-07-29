import { useEffect, useState } from 'react'
import './App.css'
import MovieCard from './components/MovieCard'

function App() {

  const [movies, setMovies] = useState([]);
  const [searchterm, setSearchterm] = useState("");

  const apikey = "85ef9b90491c1dd58a0f7503d87a0267";

  const handlesearch = async(title) => {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${title}`);
    const data = await res.json();
    setMovies(data.results);
  }

  useEffect(() => {
    handlesearch("avengers");
  }, []);



  return (
    <>
      <h1 className='headertitle'>Movie Surfer</h1>
      <div className='searchbar'>
        <input type='text' value={searchterm} onChange={(e) => setSearchterm(e.target.value)}
        placeholder='Search movies...'/>
        <button onClick={() => handlesearch(searchterm)}>Search</button>
      </div>
      <div className='content'>
        <div className='movieresult'>
          {movies?.length>0 ?
          (movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
          ))) :(<p>No movies found</p>)}
        </div>
      </div>
    </>
  )
}

export default App
