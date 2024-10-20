import { SearchIcon, SuperBad, SuperBadLogo, BellIcon } from "@/assets/icons";

import { theme } from "@/utils/function/color/constant";
import React from "react";
import { View, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={[styles.container]}>
      <SuperBad OnPress={() => console.log("logo")} />
      <View style={[styles.right]}>
        <SearchIcon OnPress={() => console.log("serch")} />
        <BellIcon OnPress={() => console.log("bell")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 32,
    backgroundColor: theme.color.black,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  right: {
    flexDirection: "row",
    gap: 18,
  },
});
