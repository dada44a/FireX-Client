import MovieCard from "./MovieCard";
import { Movie } from "@/Interfaces";

interface MovieListProps {
  id?: number;
  title?: string;
  movies?: Movie[];
}

export default function MovieList(props: MovieListProps) {
  const { movies } = props;

  // Map through the movies and render MovieCard for each movie
  const movieCard = movies?.map((movie, index) => (
    <MovieCard
      key={index}
      movie_id={movie.movie_id}
      title={movie.title}
      poster={movie.poster}
      genre={movie.genre}
      duration={movie.duration}
      releaseDate={movie.releaseDate}
    />
  ));

  // Conditional rendering based on the length of movies
  const movieList =
    !movies || movies?.length === 0 ? (
      <p>No movies found.</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7">
        {movieCard}
      </div>
    );

  return (
    <section className="py-8">
      <div className="container  lg:ml-[40px] ">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">{props.title}</h2>
        {movieList}
      </div>
    </section>
  );
}
