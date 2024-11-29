import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Timer from "../components/Timer";
import { Audio } from "expo-av";

const colors = ["#f7dc6f", "#a2d9ce", "#d7bde2"];
const options = ["Pomodoro", "Short Break", "Long Break"];

export default function App() {
 const [isWorking, setIsWorking] = useState(false);
 const [time, setTime] = useState(25 * 60);
 const [currentTime, setCurrentTime] = useState(0);
 const [isActive, setIsActive] = useState(false);

 const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes < 10 ? "0" : ""}${minutes}:${secs < 10 ? "0" : ""}${secs}`;
 };

 useEffect(() => {
  let interval = null;

  if (isActive) {
    interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);
  } else {
    clearInterval(interval);
  }

  return () => clearInterval(interval)
 }, [isActive, time])

 function handleStartStop() {
  playSound();
  setIsActive(!isActive);
 }
 
 async function playSound() {
  const { sound } = await Audio.Sound.createAsync(
    require("../assets/bambu_1.mp3")
  )
  await sound.playAsync();
 }

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
    <TouchableOpacity onPress={handleStartStop} style={styles.button}>
      <Text style={styles.state}>{isActive ? "STOP" : "START"}</Text>
    </TouchableOpacity>
   </View>
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: "center",
  paddingHorizontal: 15
 },
 main: {
  flex: 1,
  justifyContent: "center",
  maxWidth: 960,
  marginHorizontal: "auto"
 },
 text: {
  fontSize: 32,
  fontWeight: "bold"
 },
 subtitle: {
  fontSize: 24,
  color: "#38434D"
 },
 state: {
  color: "white",
  fontWeight: "bold"
 },
 button: {
  alignItems: "center",
  backgroundColor: "#333333",
  padding: 15,
  marginTop: 15,
  borderRadius: 15
 }
});
