import { useReducer } from "react";
import { apiAxio } from "../config/apiAxio";
import { AuthReducer } from "../reducers/AuthReducer";
import { AuthContext } from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialValues = {
  user: { name: "", lastname: "", isloading: true },
  token: null,
  isLogged: false,
  errormsj: "",
};

export const AuthProviders = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialValues);

  // Método de login para verificar el usuario
  const login = async (email, password) => {
    try {
      const { data } = await apiAxio.get("/usuario", {
        params: { email, password },
      });

      if (data.length > 0) {
        const user = data[0];
        dispatch({
          type: "LOGIN",
          payload: {
            user: { name: user.name, lastname: user.lastname },
            token: "fake-jwt-token", 
          },
        });

        await AsyncStorage.setItem("token", "fake-jwt-token");

        return true;
      } else {
        dispatch({
          type: "LOGIN_FAILED",
          payload: {
            errormsj: "Credenciales incorrectas. Intenta nuevamente.",
          },
        });
        return false;
      }
    } catch (error) {
      console.error("Error en el login:", error);
      dispatch({
        type: "LOGIN_FAILED",
        payload: {
          errormsj: "Error en la conexión. Inténtalo de nuevo más tarde.",
        },
      });
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ state, dispatch, login }}>
      {children}
    </AuthContext.Provider>
  );
};
