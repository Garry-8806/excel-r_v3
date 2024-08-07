const initialState = {
    user: null,
    token: null,
    error: null,
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { ...state, user: action.payload.user, token: action.payload.token };
      case 'LOGIN_FAIL':
        return { ...state, error: action.payload };
      case 'REGISTER_SUCCESS':
        return { ...state, user: action.payload.user, token: action.payload.token };
      case 'REGISTER_FAIL':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  