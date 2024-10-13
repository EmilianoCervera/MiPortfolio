import React from "react";
import { 
  View, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  KeyboardAvoidingView, 
  ScrollView, 
  Platform, 
  Keyboard 
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const CommentForm = ({ title, description, setTitle, setDescription, addEvent }) => {
  const isButtonDisabled = !title || !description; // Botón desactivado si los campos están vacíos.

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined} // iOS: mueve contenido hacia arriba
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}> {/* Cierra el teclado al tocar fuera del input */}
        <ScrollView 
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}
          keyboardShouldPersistTaps="handled" // Asegura que los inputs se pueden tocar mientras el teclado está abierto
        >
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
              placeholder="¿Qué opinas?"
              placeholderTextColor="#333"
              value={description}
              onChangeText={setDescription}
              multiline
            />
            <TouchableOpacity
              style={[styles.addButton, isButtonDisabled && styles.disabledButton]}
              onPress={addEvent}
              disabled={isButtonDisabled}
            >
              {isButtonDisabled ? (
                <FontAwesome6 name="face-meh-blank" size={24} color="white" />
              ) : (
                <FontAwesome6 name="face-grin-beam" size={24} color="white" />
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
    width: "90%",
  },
  addButton: {
    backgroundColor: "#333",
    borderRadius: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center", 
    marginVertical: 5,
    width: "90%",
  },
  disabledButton: {
    backgroundColor: "#555", // Color más claro para el botón desactivado
  },
});

export default CommentForm;
