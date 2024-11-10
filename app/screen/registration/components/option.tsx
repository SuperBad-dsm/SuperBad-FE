import { theme } from "@/utils/function/color/constant";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

type SelectedType = {
  text: string | undefined;
};

interface PropType {
  selected: SelectedType;
  setSelected: (props: SelectedType) => void;
  item: string;
}

export default function ClassButton({ selected, setSelected, item }: PropType) {
  const { text: className } = selected;
  return (
    <TouchableWithoutFeedback
      style={[{ width: 100 }]}
      onPress={() => {
        setSelected({
          ...selected,
          text: className === item ? undefined : item,
        });
      }}
    >
      <View
        style={[
          styles.container,
          {
            backgroundColor:
              className === item ? "#FFEC3E16" : theme.color.GRAY[700],
            borderColor:
              className === item ? theme.color.YELLOW : theme.color.GRAY[500],
          },
        ]}
      >
        <Text
          style={{
            color: className === item ? theme.color.YELLOW : theme.color.white,
            textAlign: "center",
          }}
        >
          {item}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 20,
  },
});
