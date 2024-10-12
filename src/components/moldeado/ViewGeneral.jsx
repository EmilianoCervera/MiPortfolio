import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Modal,
  Linking,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign"; // Importa AntDesign para el ícono de cerrar
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
//import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";

export const ViewGeneral = () => {
  const myImage = require("../../assets/video.gif");
  const myPerfil = require("../../assets/perfil.png");

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handlePress = (skill) => {
    let url = "";

    switch (skill) {
      case "whatsapp":
        const phoneNumber = "656689812";
        url = `https://wa.me/${phoneNumber}`;
        break;
      case "instagram":
        const instagramUsername = "eemmiic";
        url = `https://www.instagram.com/${instagramUsername}`;
        break;
      case "phone-call":
        const phoneToCall = "656689812";
        url = `tel:${phoneToCall}`;
        break;
      case "email":
        const email = "emicerv071092@gmail.com";
        url = `mailto:${email}`;
        break;
      case "github":
        const github = "EmilianoCervera/MiPortfolio";
        url = `https://github.com/${github}`;
        break;
      default:
        setSelectedSkill(skill);
        setModalVisible(true);
        return;
    }

    // Abre la URL correspondiente
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL", err)
    );
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedSkill(null);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={myImage}
        style={styles.imageBackground}
        imageStyle={styles.image}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Contacto</Text>
          <View style={styles.contentContact}>
            <TouchableOpacity onPress={() => handlePress("phone-call")}>
              <Feather name="phone-call" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("email")}>
              <Fontisto name="email" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("whatsapp")}>
              <FontAwesome6 name="whatsapp" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("instagram")}>
              <Ionicons name="logo-instagram" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress("github")}>
              <AntDesign name="github" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.content2}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Desarrollador Front-End</Text>
            <TouchableOpacity onPress={() => handlePress()}>
              <MaterialIcons
                name="zoom-out-map"
                size={24}
                color="white"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.description}
           numberOfLines={6}
           ellipsizeMode="tail" 
          >
            Hola! {"\n"} Soy un desarrollador apasionado y creativo.
            Comprometido con la creación de interfaces de usuario intuitivas y
            atractivas que ofrecen una experiencia excepcional al usuario.{"\n"}{" "}
            Capaz de trabajar en equipo, resolver problemas y aprender nuevas
            tecnologías rápidamente.
          </Text>
        </View>
        <View style={styles.content3}>
          <Image source={myPerfil} style={styles.eventImage} />
          <View style={styles.eventTextContainer}>
            <View style={styles.contentText}>
              <Text style={styles.title}>31</Text>
              <Text style={styles.description}>edad</Text>
            </View>
            <View style={styles.contentText}>
              <Text style={styles.title}>Arg</Text>
              <Text style={styles.description}>nacionalidad</Text>
            </View>
            <View style={styles.contentText}>
              <Text style={styles.title}>Esp-Ing</Text>
              <Text style={styles.description}>idiomas</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      {modalVisible && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={handleCloseModal}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Hola!</Text>
              <Text style={styles.modalDescription}>
                Soy un desarrollador apasionado y creativo. Comprometido con la
                creación de interfaces de usuario intuitivas y atractivas que
                ofrecen una experiencia excepcional al usuario.
                {"\n"} Capaz de trabajar en equipo, resolver problemas y
                aprender nuevas tecnologías rápidamente.{"\n"}{"\n"}{" "}Deja tu comentario!{"\n"}{"\n"}usu1@gmail.com{"\n"}Pass: 123
              </Text>
              <TouchableOpacity
                onPress={handleCloseModal}
                style={styles.closeButton}
              >
                <AntDesign name="closecircle" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    width: "95%",
    height: "54%",
    borderRadius: 25,
    margin: 5,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 10,
    overflow: "hidden",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    borderRadius: 25,
  },
  eventImage: {
    width: 80,
    height: 80,
    borderRadius: 25,
    marginRight: 20,
  },
  contentText: {
    padding: 5,
    alignItems: "center",
  },
  content: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 15,
    position: "absolute",
    bottom: 25,
    left: 10,
    right: 10,
  },
  contentContact: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5,
  },
  content2: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 10,
    borderRadius: 15,
    position: "absolute",
    bottom: 130,
    left: 10,
    right: 10,
  },
  content3: {
    //backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 10,
    borderRadius: 15,
    position: "absolute",
    bottom: 320,
    left: 5,
    right: 10,
    flexDirection: "row",
    width: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    numberOfLines: 1,
  },
  eventTextContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 5,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    color: "white",
    fontSize: 16,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    marginLeft: 10,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  closeButton: {
    borderRadius: 5,
    padding: 10,
  },
});
