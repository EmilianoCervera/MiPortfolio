import React from "react";
import { Modal, View, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import RegistroForm from "../Loguin/RegistroForm";
import IngresoForm from "../Loguin/IngresoForm";

const AuthModal = ({
  isVisible,
  modalType,
  onClose,
  onSubmit,
  onOpenModal,
  onLoginSuccess, // Prop para notificar éxito en login
}) => {

  // Función para manejar el submit en el formulario de ingreso
  const handleLoginSubmit = async () => {
    const success = await onSubmit(); // Verifica si el login es exitoso
    if (success) {
      onLoginSuccess(); // Si el login es exitoso, ejecuta la función para cerrar el modal
    } else {
      Alert.alert("Login Fallido", "Credenciales incorrectas.");
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Modal para acceso denegado */}
          {modalType === "denegado" && (
            <>
              <Text style={styles.warningText}>Acceso denegado</Text>
              <Text style={styles.warningSubtext}>
                Debes estar registrado para agregar una nota.
              </Text>
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => onOpenModal("registro")}
                >
                  <Text style={styles.buttonText}>Registro</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => onOpenModal("ingreso")}
                >
                  <Text style={styles.buttonText}>Ingresar</Text>
                </TouchableOpacity>
              </View>
            </>
          )}

          {/* Modal para el formulario de registro */}
          {modalType === "registro" && (
            <RegistroForm onSubmit={onSubmit} />
          )}

          {/* Modal para el formulario de ingreso */}
          {modalType === "ingreso" && (
            <IngresoForm onSubmit={handleLoginSubmit} onLoginSuccess={onLoginSuccess}/>
          )}

          {/* Botón de cierre */}
          <View style={styles.modalButtons}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <AntDesign name="closecircle" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    borderRadius: 10,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  warningText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  warningSubtext: {
    color: "white",
    fontSize: 14,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#333",
    borderRadius: 50,
    padding: 10,
    width: 100,
    alignItems: "center",
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  closeButton: {
    borderRadius: 50,
    padding: 10,
    alignItems: "center",
    marginVertical: 5,
  },
});

export default AuthModal;
