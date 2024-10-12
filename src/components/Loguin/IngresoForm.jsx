import React, { useContext } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
  Platform,
  ScrollView,
} from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { useForm } from "../hooks/useForm";
import { useNavigation } from "@react-navigation/native";

const IngresoForm = ({ onLoginSuccess }) => {
  const navigation = useNavigation();
  const { formState, onChangeInput } = useForm({
    email: "",
    password: "", // Asegúrate de inicializar los campos del formulario
  });
  const { login, state } = useContext(AuthContext);

  const handleSubmit = async () => {
    const { email, password } = formState;

    // Validación básica para asegurarse de que los campos no estén vacíos
    if (!email || !password) {
      Alert.alert("Error", "Por favor, completa ambos campos.");
      return;
    }

    const isValid = await login(email, password);

    if (isValid) {
      onLoginSuccess(); // Llama a la función cuando el login sea exitoso
    } else {
      // Mostrar el mensaje de error del estado (errormsj)
      Alert.alert("Error", state.errormsj || "Credenciales incorrectas.");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{width:"100%" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Diferente comportamiento para iOS y Android
      keyboardVerticalOffset={100} // Ajustar si es necesario
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Text style={styles.headerText}>Ingresar</Text>
          <TextInput
            style={styles.input}
            placeholder="Correo"
            placeholderTextColor="#333"
            onChangeText={(value) => onChangeInput("email", value)}
            value={formState.email}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#333"
            secureTextEntry
            onChangeText={(value) => onChangeInput("password", value)}
            value={formState.password}
          />
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal:15,
    justifyContent: "center", // Centrar los elementos dentro del contenedor
    flexGrow: 1,
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
  submitButton: {
    backgroundColor: "#333",
    borderRadius: 50,
    padding: 10,
    alignItems: "center",
    marginVertical: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: "#555",
    borderRadius: 50,
    padding: 10,
    alignItems: "center",
    marginVertical: 5,
  },
});

export default IngresoForm;
