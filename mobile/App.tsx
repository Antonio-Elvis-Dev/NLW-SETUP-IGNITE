import { StyleSheet, Text, View, StatusBar } from "react-native";

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";

import Loading from "./src/components/Loading";
import Routes from "./src/routes/routes";

import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [fonstLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  if (!fonstLoaded) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <Routes />
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
    </NavigationContainer>
  );
}
