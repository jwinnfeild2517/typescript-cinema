export function updateMovies(data: object) {
  return { type: 'GET_MOVIES', data };
}

export function changePage() {
  return { type: 'CHANGE_PAGE' };
}

export function changeQuery(query: string) {
  return { type: 'CHANGE_QUERY', data: query };
}
