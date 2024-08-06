export const fetchFilteredMovies = (filters) => async (dispatch) => {
  try {
    const { ratings, order } = filters;
    let query = '';

    // Append ratings to query
    if (ratings.length) {
      query += ratings.map(r => `rating=${r}`).join('&');
    }

    // Append order to query
    if (order) {
      query += query ? `&order=${order}` : `order=${order}`;
    }

    const response = await fetch(`http://localhost:8080/movies?${query}`);
    const data = await response.json();

    dispatch({
      type: 'UPDATE_MOVIES',
      payload: data,
    });
  } catch (error) {
    console.error('Failed to fetch movies:', error);
  }
};

export const fetchMovieDetail = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8080/movies/${id}`);
    const data = await response.json();
    console.log(data);

    dispatch({
      type: 'UPDATE_MOVIE_DETAIL',
      payload: data,
    });
  } catch (error) {
    console.error('Failed to fetch movie detail:', error);
    // Handle error appropriately, e.g., dispatch an error action
  }
};