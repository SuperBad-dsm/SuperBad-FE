import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { font, theme } from "./utils/function/color/constant";
import Input from "./components/common/input";
import Button from "./components/common/button";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.fonts, font.title[40]]}>
        텍스트 테스트
      </Text>
      <Input onChange={() => {}} label="아이디" placeholder="dede" password />
      <Button onPress={() => {}}>test</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  fonts: {
    fontFamily: "Pretendard",
  },
  text: {
    marginBottom: 20,
    color: theme.color.YELLOW,
  },
});

export default App;
