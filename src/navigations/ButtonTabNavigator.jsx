import React from "react";
import { View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { InitialScreen } from "../screens/InitialScreen";
import { Notifications } from "../components/notification/Notifications";
import { globalstyle } from "../globalStyle";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress, focused, style }) => (
  <TouchableOpacity style={[globalstyle.customButton, style]} onPress={onPress}>
    <View
      style={[globalstyle.iconBackground, focused && globalstyle.focusedIcon]}
    >
      {children}
    </View>
  </TouchableOpacity>
);

export const ButtonTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#222",
          borderRadius: 50,
          borderColor: "#222",
          position: "absolute",
          borderTopColor: "#000",
          bottom: 20,
          left: 10,
          right: 10,
          height: 60,
          paddingTop: 10,
          shadowColor: "#AE941D",
          shadowOffset: {
            width: 1,
            height: 1,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
          elevation: 3,
        },
        tabBarLabelStyle: {
          display: "none", // Ocultar los nombres debajo de los iconos
        },
        tabBarItemStyle: {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={InitialScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="face-man-profile"
              size={focused ? 30 : 25}
              color={focused ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.5)"}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} style={globalstyle.leftButton} />
          ),
        }}
      />
      <Tab.Screen
        name="Notificaciones"
        component={Notifications} // Reemplaza esto con el componente correspondiente
        options={{
          tabBarIcon: ({ focused }) => (
            <SimpleLineIcons 
              name="note" 
              size={focused ? 25 : 20} 
              color={focused ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.5)"}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} style={globalstyle.rightButton} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
