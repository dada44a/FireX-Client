import Hero from "@/components/CleanUp/Hero";
import MovieList from "@/components/Movie/MovieList";
import { movies } from "@/MockData/Movies";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero/>
      <MovieList title="Now Showing" movies={movies} />
      <MovieList title="Upcoming Movies" movies={movies} />
      
    </div>
  );
}