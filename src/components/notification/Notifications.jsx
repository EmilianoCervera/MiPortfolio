import React, { useState, useContext } from "react";
import { StyleSheet, View, ImageBackground, Alert } from "react-native";
import { globalstyle } from "../../globalStyle";
import backgroundImage from "../../assets/fondo7.jpeg";
import image from "../../assets/persona1.jpg";
import CommentForm from "./CommentForm";
import AuthModal from "./AuthModal";
import NotificationList from "./NotificationList";
import { useForm } from "../hooks/useForm";
import { Loggoutbutton } from "../UI/Loggoutbutton";
import { AuthContext } from "../../context/AuthContext";

// Inicializamos los comentarios
const initialNotifis = [
  { id: "1", title: "Emiliano", description: "buen diseño!", image: image },];

export const Notifications = () => {
  const [notifis, setNotifis] = useState(initialNotifis);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalType, setModalType] = useState(""); // "registro", "ingreso", "denegado"
  const { formState, onChageInput } = useForm();
  const { state } = useContext(AuthContext);

  // Manejar la apertura del modal
  const handleOpenModal = (type) => {
    setModalType(type);
    setIsModalVisible(true);
  };

  // Agregar un nuevo comentario solo si el usuario está autenticado
  const addEvent = () => {
    if (!state.token) {
      handleOpenModal("denegado"); // Abre el modal de "denegado" si no está autenticado
      return;
    }
    if (!title || !description) {
      Alert.alert("Error", "El título y la descripción son obligatorios.");
      return;
    }
    const newEvent = {
      id: (notifis.length + 1).toString(),
      title: title,
      description: description,
      image: image,
    };

    setNotifis([...notifis, newEvent]);
    setTitle("");
    setDescription("");
  };

  // Cierra el modal cuando el login es exitoso
  const handleLoginSuccess = () => {
    setIsModalVisible(false); // Cierra el modal al hacer login exitoso
    Alert.alert("Login Exitoso", "Ahora puedes escribir un comentario.");
  };

  // Validar el estado de autenticación antes de permitir la acción
  const handleSubmit = () => {
    if (!state.token) {
      Alert.alert("Error", "Debes estar autenticado para agregar comentarios.");
      return;
    }
    setIsModalVisible(false);
    Alert.alert("Enviado");
    console.log(formState);
  };

  return (
    <ImageBackground
      source={backgroundImage}
      style={globalstyle.notificaciones}
    >
      <View style={styles.container}>
        <NotificationList data={notifis} />
        <CommentForm
          title={title}
          description={description}
          setTitle={setTitle}
          setDescription={setDescription}
          addEvent={addEvent} // Función para agregar eventos
        />
        <Loggoutbutton style={styles.logoutButton} />
      </View>
      <AuthModal
        isVisible={isModalVisible}
        modalType={modalType}
        onChangeInput={onChageInput}
        onClose={() => setIsModalVisible(false)}
        onSubmit={handleSubmit}
        onOpenModal={handleOpenModal} // Manejar aperturas de modal
        onLoginSuccess={handleLoginSuccess} // Notificar éxito en el login
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: "89%",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 3,
    padding: 10,
  },
  logoutButton: {
    bottom: 20,
    right: 20,
  },
});
