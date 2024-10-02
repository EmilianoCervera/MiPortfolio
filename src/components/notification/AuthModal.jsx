import React from "react";
import { Modal, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import RegistroForm from "../Loguin/RegistroForm";
import IngresoForm from "../Loguin/IngresoForm";

const AuthModal = ({
  isVisible,
  modalType,
  onChangeInput,
  onClose,
  onSubmit,
  onOpenModal,
  onLoginSuccess // Agregar prop
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
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
          {modalType === "registro" && (
            <RegistroForm
              onChangeInput={onChangeInput}
              onSubmit={onSubmit}
            />
          )}
          {modalType === "ingreso" && (
            <IngresoForm
              onChangeInput={onChangeInput}
              onSubmit={onSubmit}
              onLoginSuccess={onLoginSuccess} // Pasar prop a IngresoForm
            />
          )}
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
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
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
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.65,
  },
});

export default AuthModal;
