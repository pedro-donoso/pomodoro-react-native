import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Header from "../components/Header";
import Timer from "../components/Timer"

const colors = ["#f7dc6f", "#a2d9ce", "#d7bde2"];
const options = ["Pomodoro", "Short Break", "Long Break"];

export default function App() {
 const [isWorking, setIsWorking] = useState(false);
 const [time, setTime] = useState(25 * 60);
 const [currentTime, setCurrentTime] = useState(0);

 const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes < 10 ? "0" : ""}${minutes}:${secs < 10 ? "0" : ""}${secs}`;
 };

 return (
  <View style={[styles.container, { backgroundColor: colors[currentTime] }]}>
   <View style={styles.main}>
    <Text style={styles.text}>Pomodoro</Text>
    <Text style={styles.text}>{formatTime(time)}</Text>{" "}
    <Header
     currentTime={currentTime}
     setCurrentTime={setCurrentTime}
     setTime={setTime}
    />
    <Timer time={time} />
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
 text: {
  fontSize: 32,
  fontWeight: "bold",
 },
 subtitle: {
  fontSize: 24,
  color: "#38434D",
 },
});
