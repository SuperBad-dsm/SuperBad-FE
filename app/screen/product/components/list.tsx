import Seemore from "@/assets/icons/seemore";
import { font, theme } from "@/utils/function/color/constant";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface ListProp {
  img: string;
  title: string;
  date: string;
  price: number;
}

export default function List({ img, title, date, price }: ListProp) {
  return (
    <TouchableOpacity style={[styles.container]}>
      <View style={{ gap: 15, flexDirection: "row" }}>
        <Image
          source={{ uri: img }}
          borderRadius={8}
          width={110}
          height={110}
        />
        <View style={styles.textWrap}>
          <Text
            style={[
              font.subTitle["18-medium"],
              { color: theme.color.white, marginBottom: 4 },
            ]}
          >
            {title}
          </Text>
          <Text
            style={[
              font.body["14-medium"],
              { color: theme.color.GRAY[400], marginBottom: 12 },
            ]}
          >
            {date}
          </Text>
          <Text
            style={[font.subTitle["20-medium"], { color: theme.color.white }]}
          >
            {price}원
          </Text>
        </View>
      </View>
      <Seemore />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 12,
    color: theme.color.white,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textWrap: {
    flexDirection: "column",
  },
});
