// reducer.js
const initialState = {
  movies: [],
  isLoading: false,
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_MOVIES':
      return {
        ...state,
        movies: action.payload,
        isLoading: false,
      };
    case 'FETCH_MOVIES_REQUEST':
      return {
        ...state,
        isLoading: true,
      };
    case 'FETCH_MOVIES_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;



