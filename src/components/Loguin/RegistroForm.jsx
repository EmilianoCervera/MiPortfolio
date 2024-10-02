import React, { useContext } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { AuthContext } from "../../context/AuthContext"; // Importar el contexto
import { useForm } from "../hooks/useForm"; // Hook para manejar el formulario

const RegistroForm = () => {
  const { register } = useContext(AuthContext);  // Obtener la función register del contexto
  const { formState, onChangeInput } = useForm(); // Usar el hook para obtener los inputs y sus valores

  const handleSubmit = async () => {
    const newUser = {
      name: formState.nombre,
      email: formState.email,
      password: formState.password,
      contacto: formState.contacto,
    };

    // Validación básica para asegurarse de que todos los campos estén completos
    if (!newUser.name || !newUser.email || !newUser.password || !newUser.contacto) {
      Alert.alert("Error", "Por favor, completa todos los campos.");
      return;
    }

    try {
      // Intentamos registrar el nuevo usuario
      const isSuccess = await register(newUser);

      if (isSuccess) {
        Alert.alert("Registro Exitoso", "El usuario ha sido registrado correctamente.");
      } else {
        Alert.alert("Error", "No se pudo completar el registro. Intenta nuevamente.");
      }
    } catch (error) {
      console.error("Error en el registro:", error);
      Alert.alert("Error", "Hubo un error en el registro.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Registro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        placeholderTextColor="#000"
        onChangeText={(value) => onChangeInput("nombre", value)} // Guardar nombre en formState
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#000"
        onChangeText={(value) => onChangeInput("email", value)} // Guardar email en formState
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#000"
        secureTextEntry
        onChangeText={(value) => onChangeInput("password", value)} // Guardar password en formState
      />
      <TextInput
        style={styles.input}
        placeholder="Contacto (Email, Redes Sociales, etc.)"
        placeholderTextColor="#000"
        onChangeText={(value) => onChangeInput("contacto", value)} // Guardar contacto en formState
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

export default RegistroForm;
