import { MovieType } from "./types";
type MovieResultsData = {
  movie_results: Array<MovieType>;
}

type ExternalIdsData = {
  id: number,
  imdb_id: string,
  wikidata_id: string,
  facebook_id: string | null,
  instagram_id: string | null,
  twitter_id: string | null
}

async function fetchExternalIds(movieId: string): Promise<ExternalIdsData> {
  const extenalIdApi = `https://api.themoviedb.org/3/movie/${movieId}/external_ids?api_key=bdb54de4ff1eee95cbe1c800bd3cc44a`;

  const response = await fetch(extenalIdApi)
  if (response.ok) {
    const data: ExternalIdsData = await response.json()
    const imdbId = data?.imdb_id
    if (imdbId) {
      return data
    } else {
      return Promise.reject(new Error(`movie not found`))
    }
  } else {
    console.log(response);

    const error = new Error('Movie not found')
    return Promise.reject(error)
  }
}

export const getMovieDetail = async (movieId: string): Promise<MovieType> => {
  const { imdb_id }: ExternalIdsData = await fetchExternalIds(movieId);

  const findMovieApi = `https://api.themoviedb.org/3/find/${imdb_id}?api_key=bdb54de4ff1eee95cbe1c800bd3cc44a&language=en-US&external_source=imdb_id`;

  const response = await fetch(findMovieApi);

  if (response.ok) {
    const data: MovieResultsData = await response.json();
    const movieResults = data?.movie_results
    if (movieResults && movieResults.length > 0) {
      return movieResults[0]
    }else {
      return Promise.reject(new Error(`No results found for this movie ${imdb_id}`))
    }
  }else {
    const error = new Error('movie results not found for imbd-id: ${imdb_id}')
    return Promise.reject(error)
  }
};

export default async function (query: string, page: number) {
  const apiString = `https://api.themoviedb.org/3/movie/${query}?api_key=bdb54de4ff1eee95cbe1c800bd3cc44a&&language=en-US&page=${page}`;
  const res = await fetch(apiString);
  const movies = await res.json();
  return movies;
}
