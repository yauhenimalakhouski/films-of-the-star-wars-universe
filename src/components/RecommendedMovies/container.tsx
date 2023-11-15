"use client";

import { useGetFilmsQuery } from "@/store/services/api";
import { RecommendedMovies } from "./component";
import { Film } from "@/types/types";

type CompProps = {
  episodeId: number;
};

function getRecommendedMovies(episode_id: number, films: Film[]) {
  let episodesInterval: number[] = [];
  if (episode_id === 1) {
    episodesInterval.push(episode_id + 1, episode_id + 2);
  } else if (episode_id === films.length) {
    episodesInterval.push(episode_id - 1, episode_id - 2);
  } else {
    episodesInterval.push(episode_id - 1, episode_id + 1);
  }
  const recommendedMovies = films.filter((film) =>
    episodesInterval.includes(film.episode_id)
  );
  return recommendedMovies;
}

export const RecommendedMoviesContainer = ({ episodeId }: CompProps) => {
  const { data: films, isFetching, isSuccess } = useGetFilmsQuery(undefined);
  if (!films) {
    return null;
  }

  const recommendedMovies = getRecommendedMovies(episodeId, films);

  return <RecommendedMovies recommendedMovies={recommendedMovies}/>;
};
