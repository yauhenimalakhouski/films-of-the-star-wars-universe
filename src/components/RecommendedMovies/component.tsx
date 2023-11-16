import { Film } from "@/types/types";
import styles from "./styles.module.css";
import { MovieLink } from "../MovieLink/component";

type CompProps = {
  recommendedMovies: Film[];
};

export const RecommendedMovies = ({ recommendedMovies }: CompProps) => {
  return (
    <div className={styles.root}>
      <h3>If you liked this movie:</h3>
      <div className={styles.more_films}>
        {recommendedMovies.map((movie) => (
          <MovieLink key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
