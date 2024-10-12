import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const CommentForm = ({ title, description, setTitle, setDescription, addEvent }) => {
  const isButtonDisabled = !title || !description; // El botón se desactiva si título o descripción están vacíos.

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        placeholderTextColor="#333"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="¿Que opinas?"
        placeholderTextColor="#333"
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity
        style={[styles.addButton, isButtonDisabled && styles.disabledButton]} // Aplica estilo de desactivado
        onPress={addEvent}
        disabled={isButtonDisabled}
      >
        {isButtonDisabled ? (
          <View>
            <FontAwesome6 name="face-meh-blank" size={24} color="white" />
          </View>
        ) : (
          <FontAwesome6 name="face-grin-beam" size={24} color="white" />
        )}
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  input: {
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
  addButton: {
    backgroundColor: "#333",
    borderRadius: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center", // Centra el icono en el botón
    marginVertical: 5,
    width: "90%",
  },
  disabledButton: {
    backgroundColor: "#333", // Color de fondo más claro para el botón desactivado
    width: "30%",
  },
});

export default CommentForm;
