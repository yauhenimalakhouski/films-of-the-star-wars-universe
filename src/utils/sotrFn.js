export function sortEpisodeUp() {
  return (a, b) => +a.episode_id - +b.episode_id;
}

export function sortEpisodeDown() {
  return (a, b) => +b.episode_id - +a.episode_id;
}

export function sortFilmReleaseDown() {
  return (a, b) => +b.release_date.slice(0, 4) - +a.release_date.slice(0, 4);
}

export function sortFilmReleaseUp() {
  return (a, b) => +a.release_date.slice(0, 4) - +b.release_date.slice(0, 4);
}

export const getSortFn = (sortType) => {
  switch (sortType) {
    case "episode-up":
      return sortEpisodeUp();
    case "episode-down":
      return sortEpisodeDown();
    case "film-release-up":
      return sortFilmReleaseUp();
    case "film-release-down":
      return sortFilmReleaseDown();
    default:
      return;
  }
};
