
const initialState = {
  isAuth: false, // Ensure isAuth is false initially
  token: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuth: true,
        token: action.payload.token,
        error: null,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isAuth: false,
        token: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
