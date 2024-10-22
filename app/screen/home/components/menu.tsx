import { MenuType } from "@/@types/type";
import { font, theme } from "@/utils/function/color/constant";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Menu = ({ icon, to, name }: MenuType) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.IconStyle}>
        {React.isValidElement(icon) ? (
          icon
        ) : (
          <Text style={{ color: theme.color.white }}>Icon not available</Text>
        )}
      </View>
      <Text style={[font.body["14-medium"], { color: theme.color.white }]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  IconStyle: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.color.GRAY[800],
    borderRadius: 10,
  },
});
