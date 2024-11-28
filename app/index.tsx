import { Button, StyleSheet, Text, View } from "react-native";

export default function Page() {
 return (
  <View style={styles.container}>
   <View style={styles.main}>
    <Text style={styles.title}>Hola mundo</Text>
    <Button title="My Button" />
   </View>
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: "center",
  padding: 24,
 },
 main: {
  flex: 1,
  justifyContent: "center",
  maxWidth: 960,
  marginHorizontal: "auto",
 },
 title: {
  fontSize: 32,
  fontWeight: "bold",
 },
 subtitle: {
  fontSize: 24,
  color: "#38434D",
 }
});
