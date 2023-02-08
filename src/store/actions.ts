
/**
 * action creator function
 * @param data an object holding the movie results to be updated
 * @returns Returns action object to be executed by the movieResults reducers
 *
 */
export function updateMovies(data: object) {
  return { type: 'GET_MOVIES', data };
}

export function changePage() {
  return { type: 'CHANGE_PAGE' };
}

/**
 * action creator function
 * @param query a query string to be used
 * @returns Returns action object for the action type and the query string
 *
 */
export function changeQuery(query: string) {
  return { type: 'CHANGE_QUERY', data: query };
}
