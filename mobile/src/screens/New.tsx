import { View, ScrollView, Text, TextInput } from "react-native";
import { BackButton } from "../components/BackButton";
import { CheckBox } from "../components/CheckBox";


const avaliableWeekDays= ['Domingo','Segunda-feira','Terça-ferira','Quarta-feira','Quinta-feira','Sexta-feira', 'Sabado']

export function New() {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackButton />
        <Text className="mt-6 text-white font-extrabold text-3xl">
          Criar hábito
        </Text>
        <Text className="mt-6 text-white font-semibold text-base">
          Qual seu comprometimento?
        </Text>
        <TextInput className="h-12 pl-4 rounded-lg mt-3 bg-zinc-800 text-white focus:border-2 focus:border-gray-600"/>
        
        {
          avaliableWeekDays.map((weekDay, i)=>(

            <CheckBox key={weekDay} title={weekDay}/>
          ))
        }

      </ScrollView>
    </View>
  );
}
