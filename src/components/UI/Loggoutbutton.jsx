import React from 'react'
import { useContext } from 'react';
import { StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import FontAwesome from "react-native-vector-icons/FontAwesome";


export const Loggoutbutton = () => {
  const { state, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
      // Despachar la acción de logout para limpiar el estado global
      dispatch({ type: "LOGOUT" });

      // Opción: Mostrar una alerta opcional para confirmar que se cerró la sesión
      Alert.alert("Sesión cerrada", "Has cerrado sesión exitosamente.");
  };

  if (!state.token) {
      // No mostrar el botón si no hay token (usuario no está logueado)
      return null;
  }

  return (
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <FontAwesome name="sign-out" size={24} color="white" />
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 205,
    right: 20,
    backgroundColor: "#333",
    borderRadius: 50,
    padding: 10,
    shadowColor: "#EFE98E",
    shadowOffset: { width: -5, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});

