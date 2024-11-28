import { View, Text, StyleSheet } from "react-native"

export default function Timer({time}) {
  return (
    <View style={styles.container}>
        <Text>{time}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F2"
  }
})