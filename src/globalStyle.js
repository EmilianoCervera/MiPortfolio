import { StyleSheet } from "react-native";

export const globalstyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  moldes: {
    backgroundColor: "#1572B6",
    alignItems: "center",
    width: "100%",
    padding: 2,
    height: "100%",
    paddingBottom:5,
    paddingTop:10
  },
  notificaciones:{
    flex:1,
    paddingTop:45,
    alignItems:"center"
  },
  customButton: {
    top: -5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  iconBackground: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#222', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusedIcon: {
    backgroundColor: 'red', 
  },
  leftButton: {
    position: 'absolute',
    left: 20, 
  },
  rightButton: {
    position: 'absolute',
    right: 20, 
  },
});
