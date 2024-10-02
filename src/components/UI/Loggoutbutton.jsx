import React from 'react'
import { useContext } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import FontAwesome from "react-native-vector-icons/FontAwesome";

export const Loggoutbutton = () => {
    const { state, logout } = useContext(AuthContext);

    if (!state.token) {
      // No mostrar el botón si no hay token (usuario no está logueado)
      return null;
    }
  
    return (
      <TouchableOpacity style={[styles.button]} onPress={logout}>
        <FontAwesome name="sign-out" size={24} color="white" />
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 200,
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

