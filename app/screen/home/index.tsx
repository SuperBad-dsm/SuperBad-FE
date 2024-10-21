import Header from "@/components/common/header";
import SegmentedControl from "@/components/common/seg";
import { theme } from "@/utils/function/color/constant";
import React from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import { Menu } from "./components/menu";
import { MenuList } from "@/utils/menu";
import { SlidePng } from "@/assets/icons";
import { Recommend } from "./components/recommend";

export const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <SegmentedControl
        list={[
          { text: "추천", link: "home", path: "/home" },
          { text: "전체", link: "notice", path: "/notice" },
          { text: "가전제품", link: "homework", path: "/homework" },
          { text: "굿즈", link: "notice", path: "/notice" },
          { text: "의료", link: "homework", path: "/homework" },
          { text: "무료나눔", link: "notice", path: "/notice" },
        ]}
        selected={"/home"}
      />
      <Image source={SlidePng} />
      <View style={styles.menuStyle}>
        {MenuList.map((item) => (
          <Menu {...item} key={item.to} />
        ))}
      </View>
      <Recommend />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: theme.color.black,
  },
  menuStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    paddingVertical: 24,
    backgroundColor: theme.color.backgroundblack,
    rowGap: 20,
  },
});
