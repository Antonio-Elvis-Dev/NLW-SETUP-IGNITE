import { Text, TouchableOpacity, View } from "react-native";
import Logo from "../assets/logo.svg";
import colors from "tailwindcss/colors";

import { Feather } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

export function Header() {
  const navigation = useNavigation();
  //const {navigate} = useNavigation()  TODO forma desestruturada

  return (
    <View className="w-full flex-row items-center justify-between">
      <Logo />
      <TouchableOpacity
        className="flex-row h-11 px-4 border border-violet-500 rounded-lg items-center"
        onPress={() => navigation.navigate("New")}
      >
        <Feather name="plus" color={colors.violet[500]} size={20} />
        <Text className=" text-white ml-3 font-semibold text-base">Novo</Text>
      </TouchableOpacity>
    </View>
  );
}
