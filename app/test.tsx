import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "./utils/function/color/constant";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.fonts, theme.font.title[40]]}>
        텍스트 테스트
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fonts: {
    fontFamily: "Pretendard",
  },
  text: {
    marginBottom: 20,
  },
});

export default App;
