import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Header({time}) {
  return (
    <View>
      <Text>{time}</Text>
    </View>
  )
}