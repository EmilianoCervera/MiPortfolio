import { useReducer } from "react";
import { AuthReducer } from "../reducers/AuthReducer";
import { AuthContext } from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";


const hardcodedUser = {
  email: "usuario@usu.com", 
  password: "1234",     
  name: "Juan",
  lastname: "Pérez",
};

const initialValues = {
  user: { name: "", lastname: "", isloading: true },
  token: null,
  isLogged: false,
  errormsj: "",
};

export const AuthProviders = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialValues);

  
  const login = async (email, password) => {
    // Comentar la llamada a la API
    // try {
    //   const { data } = await apiAxio.get("/usuario", {
    //     params: { email, password },
    //   });

    //   if (data.length > 0) {
    //     const user = data[0];
    //     dispatch({
    //       type: "LOGIN",
    //       payload: {
    //         user: { name: user.name, lastname: user.lastname },
    //         token: "fake-jwt-token", 
    //       },
    //     });

    //     await AsyncStorage.setItem("token", "fake-jwt-token");
    //     return true;
    //   } else {
    //     dispatch({
    //       type: "LOGIN_FAILED",
    //       payload: {
    //         errormsj: "Credenciales incorrectas. Intenta nuevamente.",
    //       },
    //     });
    //     return false;
    //   }
    // } catch (error) {
    //   console.error("Error en el login:", error);
    //   dispatch({
    //     type: "LOGIN_FAILED",
    //     payload: {
    //       errormsj: "Error en la conexión. Inténtalo de nuevo más tarde.",
    //     },
    //   });
    //   return false;
    // }

    // Lógica para verificar las credenciales con el usuario hardcodeado
    if (email === hardcodedUser.email && password === hardcodedUser.password) {
      dispatch({
        type: "LOGIN",
        payload: {
          user: { name: hardcodedUser.name, lastname: hardcodedUser.lastname },
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
  };

  return (
    <AuthContext.Provider value={{ state, dispatch, login }}>
      {children}
    </AuthContext.Provider>
  );
};
