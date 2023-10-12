import { useParams } from "react-router-dom";
import { movies } from "../data";
import NavBar from "../components/NavBar";

const Movie = () => {
  const { title } = useParams();
  const movie = movies.find((movie) => movie.title === title);
  const genres = movie.genres.map((genre) => <span key={genre}>{genre}</span>);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time} mins</p>
        {genres}
      </main>
    </>
  );
};

export default Movie;
