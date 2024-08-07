import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:8080/api/auth/login', { email, password });
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAIL', payload: error.response.data.message });
  }
};

export const register = (firstName, lastName, email, password, mobile) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:8080/api/auth/register', {
      firstName,
      lastName,
      email,
      password,
      mobile,
    });
    dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
  } catch (error) {
    // Check if error response data exists
    const errorMessage = error.response && error.response.data && error.response.data.message
      ? error.response.data.message
      : 'An error occurred';
    dispatch({ type: 'REGISTER_FAIL', payload: errorMessage });
  }

};
