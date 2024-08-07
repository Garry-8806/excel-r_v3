import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post('/api/auth/login', { email, password });
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAIL', payload: error.response.data.message });
  }
};

export const register = (email, password, firstName, lastName, mobileNo) => async (dispatch) => {
  try {
    const response = await axios.post('/api/auth/register', {
      email,
      password,
      firstName,
      lastName,
      mobileNo,
    });
    dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'REGISTER_FAIL', payload: error.response.data.message });
  }
};
