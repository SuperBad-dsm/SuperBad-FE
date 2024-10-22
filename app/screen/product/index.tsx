import Header from "@/components/common/header";
import SegmentedControl from "@/components/common/seg";
import { theme } from "@/utils/function/color/constant";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import List from "./components/list";

export const Product = () => {
  return (
    <View style={[styles.container]}>
      <Header />
      <SegmentedControl
        list={[
          { text: "추천", link: "recommend", path: "/recommend" },
          { text: "전체", link: "all", path: "/all" },
          {
            text: "가전제품",
            link: "homeAppliances",
            path: "/homeAppliances",
          },
          { text: "굿즈", link: "goods", path: "/goods" },
          { text: "의료", link: "medical", path: "/medical" },
          { text: "무료나눔", link: "free", path: "/free" },
        ]}
        selected={"/recommend"}
      />
      <ScrollView>
        <List img="ㅇㅍ홈" title="ergnrenrej" date="2024-04-05" price="10000" />
        <List img="ㅇㅍ홈" title="ergnrenrej" date="2024-04-05" price="10000" />
        <List img="ㅇㅍ홈" title="ergnrenrej" date="2024-04-05" price="10000" />
        <List img="ㅇㅍ홈" title="ergnrenrej" date="2024-04-05" price="10000" />
        <List img="ㅇㅍ홈" title="ergnrenrej" date="2024-04-05" price="10000" />
        <List img="ㅇㅍ홈" title="ergnrenrej" date="2024-04-05" price="10000" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.color.backgroundblack,
  },
});
