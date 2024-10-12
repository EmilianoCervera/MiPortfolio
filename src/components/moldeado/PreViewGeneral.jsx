import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

import image1 from "../../assets/js.jpg";
import image2 from "../../assets/framework2.jpeg";
import image3 from "../../assets/node.jpg";
import image4 from "../../assets/htmlycss.jpg";
import image5 from "../../assets/api.jpg"
import image6 from "../../assets/test.jpg"
import image7 from "../../assets/mas.jpg"

import { useState } from "react";

const skills = [
  {
    id: "1",
    title: "Lenguaje de programación",
    description: "JavaScript",
    image: image1,
    imageskill: "logo",
  },
  {
    id: "2",
    title: "Bibliotecas - Frameworks",
    description: ["React", "React Native", "Axios", "Redux Toolkit", "Redux"],
    image: image2,
    imageskill: "logo",
  },
  {
    id: "3",
    title: "Herramientas y Tecnologías",
    description: ["Node.js", "Expo","Vite"],
    image: image3,
    imageskill: "logo",
  },
  {
    id: "4",
    title: "Lenguajes de Marcado y Estilos",
    description: ["HTML", "CSS"],
    image: image4,
    imageskill: "logo",
  },
  {
    id: "5",
    title: "Gestión del Estado y API",
    description: ["RTK Query", "Redux Toolkit","Custome Hooks"],
    image: image5,
    imageskill: "logo",
  },
  {
    id: "6",
    title: "Pruebas",
    description: ["Jest"],
    image: image6,
    imageskill: "logo",
  },
  {
    id: "7",
    title: "Tools",
    description: ["Git", "Figma", "Miro", "Trello", "Slack"],
    image: image7,
    imageskill: "logo",
  },
];

const EventItem = ({ event }) => (
  <View style={styles.eventContainer}>
    <Image source={event.image} style={styles.eventImage} />
    <View style={styles.eventTextContainer}>
      <Text style={styles.eventTitle}>{event.title}</Text>
      {/*<Text style={styles.eventDescription}>{event.imageskill}</Text>*/}
    </View>
  </View>
);

export const PreViewGeneral = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handlePress = (skill) => {
    setSelectedSkill(skill);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedSkill(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Habilidades Técnicas</Text>
        <Text style={styles.description}>technical skills.</Text>
      </View>
      <FlatList
        data={skills}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <EventItem event={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContent}
      />
      {selectedSkill && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={handleCloseModal}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Image source={selectedSkill.image} style={styles.modalImage} />
              <Text style={styles.modalTitle}>{selectedSkill.title}</Text>
              {Array.isArray(selectedSkill.description) ? (
                selectedSkill.description.map((item, index) => (
                  <Text key={index} style={styles.modalDescription}>
                    <AntDesign name="codesquareo" size={18} color="black" />{" "}
                    {item}
                  </Text>
                ))
              ) : (
                <Text style={styles.modalDescription}>
                  <AntDesign name="codesquareo" size={24} color="black" />{" "}
                  {"\b"}
                  {selectedSkill.description}
                </Text>
              )}

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
    backgroundColor: "#222",
    width: "95%",
    height: "34%",
    borderRadius: 25,
    shadowColor: "#fff",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 3,
    padding: 10,
  },
  flatListContent: {
    paddingBottom: 10,
  },
  eventContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20,
    marginBottom: 10,
    padding: 10,
  },
  eventImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  eventTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  eventTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  eventDescription: {
    color: "white",
    fontSize: 14,
  },
  content: {
    padding: 10,
    borderRadius: 15,
    marginBottom: 5,
    alignItems: "center",
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
    width: 200,
    height: 200,
    borderRadius: 50,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 20,
  },
  closeButton: {
    borderRadius: 5,
    padding: 10,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
