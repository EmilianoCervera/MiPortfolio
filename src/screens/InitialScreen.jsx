import React, { useState, useEffect } from "react";
import { StatusBar, View } from "react-native";
import { globalstyle } from "../globalStyle";
import { ViewGeneral } from "../components/moldeado/ViewGeneral";
import { PreViewGeneral } from "../components/moldeado/PreViewGeneral";

export const InitialScreen = () => {
  // Lista de colores
  const colors = ["#1572B6", "#61DAFB", "#339933", "#E34F26", "#C21325", "#764ABC"];
  
  // Estado para almacenar el color actual
  const [currentColor, setCurrentColor] = useState(colors[0]);

  // Efecto para cambiar el color automáticamente
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentColor(prevColor => {
        const currentIndex = colors.indexOf(prevColor);
        const nextIndex = (currentIndex + 1) % colors.length;
        return colors[nextIndex];
      });
    }, 5000); // Cambia de color cada 2 segundos

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={globalstyle.container}>
      <StatusBar styles="auto" />
      <View style={[globalstyle.moldes, { backgroundColor: currentColor }]}>
        <ViewGeneral />
        <PreViewGeneral />
      </View>
    </View>
  );
};
