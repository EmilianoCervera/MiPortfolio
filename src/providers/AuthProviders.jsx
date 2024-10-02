import { useReducer } from "react";
import { apiAxio } from "../config/apiAxio";
import { AuthReducer } from "../reducers/AuthReducer";
import { AuthContext } from "../context/AuthContext";

const initialValues = {
  user: {
    name: "",
    lastname: "",
    isloading: true,
  },
  token: null,
};

export const AuthProviders = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialValues);

  const login = async (email, password) => {
    try {
      const { data } = await apiAxio.get("/usuario", {
        params: {
          email,
          password,
        },
      });

      if (data.length > 0) {
        const user = data[0];
        dispatch({
          type: "LOGIN",
          payload: {
            user: {
              name: user.name,
              lastname: user.lastname,
            },
            token: "fake-jwt-token", // Puedes generar un token aquí si lo necesitas
          },
        });
        return true; // Login exitoso
      } else {
        console.log("Usuario no encontrado o credenciales incorrectas");
        return false; // Login fallido
      }
    } catch (error) {
      console.error("Error en el login:", error);
      return false; // Error en el proceso de login
    }
  };

  const register = async (newUser) => {
    try {
      const { data: usuarios } = await apiAxio.get("/usuario");

      // Asignar un nuevo ID basado en el ulti
      const newId =
        usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1;
      const userWithId = { ...newUser, id: newId };

      // Hacer la petición POST para agregar el nuevo usuario
      await apiAxio.post("/usuario", userWithId);

      console.log("Registro exitoso:", userWithId);
      return true; // Registro exitoso
    } catch (error) {
      console.error("Error en el registro:", error);
      return false; // Error en el registro
    }
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        login,
        logout,
        register
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
