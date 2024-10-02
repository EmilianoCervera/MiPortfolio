import { useState, useEffect } from "react";
import { View } from "react-native";

export const ColorWrapper = ({children}) => {

    const colors = ["#1572B6", "#61DAFB", "#339933", "#E34F26", "#C21325", "#764ABC"];
  
    const [currentColor, setCurrentColor] = useState(colors[0]);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentColor(prevColor => {
          const currentIndex = colors.indexOf(prevColor);
          const nextIndex = (currentIndex + 1) % colors.length;
          return colors[nextIndex];
        });
      }, 6000); // Cambia de color cada 6 segundos
  
      return () => clearInterval(intervalId);
    }, []);
  
  return (
    <View style={{ backgroundColor: currentColor, flex: 1 }}>
      {children}
    </View>
  )
}
