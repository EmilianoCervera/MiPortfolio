import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { ButtonTabNavigator } from "./src/navigations/ButtonTabNavigator"
import { AuthProviders } from "./src/providers/AuthProviders";

export default function App() {
  return (
    <AuthProviders>
      <NavigationContainer>
        <ButtonTabNavigator />
      </NavigationContainer>
    </AuthProviders>
  );
}
