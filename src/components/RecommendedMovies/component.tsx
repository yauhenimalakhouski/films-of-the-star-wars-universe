import { Film } from "@/types/types";

type CompProps = {
  recommendedMovies: Film[];
};

export const RecommendedMovies = ({ recommendedMovies }: CompProps) => {
  return (
    <div>
      {recommendedMovies.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
};
