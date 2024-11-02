import {
  SearchIcon,
  SuperBad,
  SuperBadLogo,
  BellIcon,
  BackIcon,
} from "@/assets/icons";

import { theme } from "@/utils/function/color/constant";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SearchInput from "./searchInput";

type changeEventType = {
  text: string;
  name: string;
};

interface HeaderProps {
  searchChange?: ({ text, name }: changeEventType) => void;
}

export default function Header({ searchChange }: HeaderProps) {
  const [search, setSearch] = useState<boolean>(false);
  const navigation = useNavigation();
  return (
    <View style={[styles.container]}>
      {search ? (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 16,
            width: "100%",
            paddingHorizontal: 32,
            paddingVertical: 11,
          }}
        >
          <TouchableOpacity onPress={() => setSearch(false)}>
            <BackIcon />
          </TouchableOpacity>
          <SearchInput onChange={searchChange!} />
        </View>
      ) : (
        <View
          style={{
            paddingVertical: 20,
            paddingHorizontal: 32,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <SuperBad OnPress={() => navigation.navigate("홈" as never)} />
          <View style={[styles.right]}>
            <TouchableOpacity onPress={() => setSearch(true)}>
              <SearchIcon OnPress={() => setSearch(true)} />
            </TouchableOpacity>
            <BellIcon OnPress={() => console.log("bell")} />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.black,
  },
  right: {
    flexDirection: "row",
    gap: 18,
  },
});
