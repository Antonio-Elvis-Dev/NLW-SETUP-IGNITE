import { Text, View } from "react-native";
import Logo from "../assets/logo.svg";
import colors from 'tailwindcss/colors'

import { Feather } from "@expo/vector-icons";

export function Header() {
  return (
    <View className="w-full flex-row items-center justify-between">
      <Logo />
      <Feather 
      name="plus"
      color={colors.violet[500]}
      size={20} />
    </View>
  );
}
