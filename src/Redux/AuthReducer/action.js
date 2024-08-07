
export const login = (credentials) => async (dispatch) => {
  try {
    const response = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (response.ok) {
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: { token: data.token },
      });
    } else {
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: data.error || 'Login failed',
      });
    }
  } catch (error) {
    dispatch({
      type: 'LOGIN_FAILURE',
      payload: error.message,
    });
  }
};
