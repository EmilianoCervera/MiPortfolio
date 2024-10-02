import React from 'react';
import { FlatList, View, Text, Image, StyleSheet } from "react-native";

const NotificationList = ({ data }) => {
  const renderItem = ({ item }) => (
    <View style={styles.eventContainer}>
      <Image source={item.image} style={styles.eventImage} />
      <View style={styles.eventTextContainer}>
        <Text style={styles.eventTitle}>{item.title}</Text>
        <Text style={styles.eventDescription}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.flatListContent}
    />
  );
};

const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom: 10,
  },
  eventContainer: {
    margin: 10,
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20,
    marginBottom: 10,
    padding: 10,
    shadowColor: "#EFE98E",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4.65,
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
});

export default NotificationList;
