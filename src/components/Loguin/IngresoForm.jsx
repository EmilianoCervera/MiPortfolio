import React, { useContext } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { useForm } from "../hooks/useForm";
import { useNavigation } from "@react-navigation/native";

const IngresoForm = ({ onLoginSuccess }) => {
  const navigation = useNavigation();
  const { formState, onChangeInput } = useForm();
  const { login } = useContext(AuthContext);

  const handleSubmit = async () => {
    const { email, password } = formState;

    // Validación básica para asegurarse de que los campos no estén vacíos
    if (!email || !password) {
      Alert.alert("Error", "Por favor, completa ambos campos.");
      return;
    }

    try {
      const isValid = await login(email, password);


      if (isValid) {
        onLoginSuccess(); // Llama a la función cuando el login sea exitoso
      } else {
        Alert.alert("Error", "Credenciales incorrectas. Intenta nuevamente.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      Alert.alert("Error", "Ocurrió un error durante el login. Por favor, intenta de nuevo.");
    }
  };

  const handleRegister = () => {
    navigation.navigate("Registro");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Ingresar</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo"
        placeholderTextColor="#000"
        onChangeText={(value) => onChangeInput("email", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#000"
        secureTextEntry
        onChangeText={(value) => onChangeInput("password", value)}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
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
});

export default IngresoForm;
