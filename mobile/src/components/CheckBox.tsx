import { TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface Props {
  checked: boolean;
}

export function CheckBox({ checked = false }: Props) {
  return (
    <TouchableOpacity className="flex-row mb-2 items-center">
      {checked ? (
        <View className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center">
          <Feather name="check" size={20} color={Colors.white} />
        </View>
      ) : (
        <View className="h-8 w-8 bg-zinc-800 rounded-lg"></View>
      )}
    </TouchableOpacity>
  );
}
