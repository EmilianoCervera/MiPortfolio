export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLogged: true,
        errormsj: "",
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        isLogged: false,
        errormsj: action.payload.errormsj, // Actualiza el mensaje de error
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
        isLogged: false,
        errormsj: "",
      };

    default:
      return state;
  }
};
