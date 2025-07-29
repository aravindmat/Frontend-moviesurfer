const MovieCard = ({movie}) => {

    const IMGurl = "https://image.tmdb.org/t/p/w500";

    return(
        <div className="movie-card">
            <img src={movie.poster_path ? IMGurl+movie.poster_path : "https://via.placeholder.com/200"} alt={movie.title} />
            <div className="moviedetails">
              <h5><b>{movie.title}</b></h5>
              <p>Release date: <strong style={{color:'#b3afafff'}}>{movie.release_date}</strong></p>
              <p>Rating: <strong style={{color:'#b3afafff'}}>{movie.vote_average}</strong></p>
            </div>
            
        </div>
    )

};

export default MovieCard