import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Header from "../components/Header";

const colors = ["#f7dc6f", "#a2d9ce", "#d7bde2"];

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");

  
  
 return (
  <View style={styles.container}>
   <View style={styles.main}>
    <Text style={styles.text}>Pomodoro</Text>
    <Header time={time} />
   </View>
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: "center",
  padding: 24
 },
 main: {
  flex: 1,
  justifyContent: "center",
  maxWidth: 960,
  marginHorizontal: "auto",
  
 },
 text: {
  fontSize: 32,
  fontWeight: "bold",
 },
 subtitle: {
  fontSize: 24,
  color: "#38434D",
 }
});
