import { font, theme } from "@/utils/function/color/constant";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Product from "./product";
import { ScrollView } from "react-native-gesture-handler";

export const Recommend = () => {
  return (
    <ScrollView style={[styles.container]}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[font.title["24-bold"]]}>추천 상품 </Text>
        <Text
          style={[font.body["14-semibold"], { color: theme.color.GRAY[400] }]}
        >
          AD
        </Text>
      </View>
      <View style={styles.recommendStyle}>
        <Product
          img="d"
          price="10000원"
          content="[미개봉] 투어스 앨범
  급처"
        />
        <Product
          img="d"
          price="10000원"
          content="[미개봉] 투어스 앨범
  급처"
        />
        <Product
          img="d"
          price="10000원"
          content="[미개봉] 투어스 앨범
  급처"
        />
        <Product
          img="d"
          price="10000원"
          content="[미개봉] 투어스 앨범
  급처"
        />
        <Product
          img="d"
          price="10000원"
          content="[미개봉] 투어스 앨범
  급처"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: theme.color.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 32,
    paddingVertical: 36,
  },
  recommendStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 20,
  },
});
