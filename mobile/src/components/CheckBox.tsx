import {
  TouchableOpacity,
  View,
  Text,
  TouchableOpacityProps,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";


interface Props extends TouchableOpacityProps {
  title: string;
  checked?: boolean;
}

export function CheckBox({ title, checked = false, ...rest  }: Props) {
  return (
    <TouchableOpacity className="flex-row mb-2 items-center" {...rest}>
      {checked ? (
        <View className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center">
          <Feather name="check" size={20} color={Colors.white} />
        </View>
      ) : (
        <View className="h-8 w-8 bg-zinc-800 rounded-lg"></View>
      )}

      <Text className="text-white text-base font-semibold ml-3">{title}</Text>
    </TouchableOpacity>
  );
}
