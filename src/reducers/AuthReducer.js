export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLogged: true,
        errormsj:""
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
        isLogged: false,
        errormsj:""
      };

    default:
      return state;
  }
};
