import { font, theme } from "@/utils/function/color/constant";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface ListProps {
  text: string;
  link: string;
  path: string;
}

interface SegmentedControlProps {
  list: ListProps[];
  selected: string;
}

export default function SegmentedControl({
  list,
  selected,
}: SegmentedControlProps) {
  return (
    <View style={[styles.container, { backgroundColor: theme.color.black }]}>
      {list.map((v) => (
        <TouchableOpacity key={v.path}>
          <Text
            style={[
              font.subTitle["18-semibold"],
              {
                color:
                  selected === v.path ? theme.color.YELLOW : theme.color.white,
                borderBottomColor:
                  selected === v.path ? theme.color.YELLOW : "transparent",
                borderBottomWidth: 2,
                paddingTop: 16,
                paddingBottom: 5,
              },
            ]}
          >
            {v.text}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 32,
  },
});
