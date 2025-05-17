import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler"; // Importa GestureHandlerRootView
import { ButtonTabNavigator } from "./src/navigations/ButtonTabNavigator";
import { AuthProviders } from "./src/providers/AuthProviders";

export default function App() {
  return (
    <AuthProviders>
      <GestureHandlerRootView style={{ flex: 1 }}> 
        <NavigationContainer>
          <ButtonTabNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </AuthProviders>
  );
}
