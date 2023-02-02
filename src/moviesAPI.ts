export const getMovieDetail = async (movieId: string) => {
  const extenalIdApi = `https://api.themoviedb.org/3/movie/${movieId}/external_ids?api_key=bdb54de4ff1eee95cbe1c800bd3cc44a`;

  let externalId = await fetch(extenalIdApi);
  externalId = await externalId.json();

  const findMovieApi = `https://api.themoviedb.org/3/find/${externalId.imdb_id}?api_key=bdb54de4ff1eee95cbe1c800bd3cc44a&language=en-US&external_source=imdb_id`;

  let movie = await fetch(findMovieApi);
  movie = await movie.json();

  return movie.movie_results[0];
};

const api = {
  movies:
    'https://api.themoviedb.org/3/discover/movie?api_key=bdb54de4ff1eee95cbe1c800bd3cc44a&adult=false&page=5',
  trending:
    'https://api.themoviedb.org/3/trending/all/week?api_key=bdb54de4ff1eee95cbe1c800bd3cc44a&adult=false',
  bestDramas:
    'https://api.themoviedb.org/3/discover/movie?api_key=bdb54de4ff1eee95cbe1c800bd3cc44a&with_genres=18&primary_release_year=2021',
  liamNeeson:
    'https://api.themoviedb.org/3/discover/movie?api_key=bdb54de4ff1eee95cbe1c800bd3cc44a&adult=false&certification_country=US&certification=R&sort_by=revenue.desc&with_cast=3896',
};

export default async function (query: string, page: number) {
  const apiString = `https://api.themoviedb.org/3/movie/${query}?api_key=bdb54de4ff1eee95cbe1c800bd3cc44a&&language=en-US&page=${page}`;
  const res = await fetch(apiString);
  const movies = await res.json();
  return movies;
}
