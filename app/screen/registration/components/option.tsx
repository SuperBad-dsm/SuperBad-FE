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
              className === item
                ? theme.color.GRAY[100]
                : theme.color.backgroundblack,
            borderColor:
              className === item ? theme.color.YELLOW : theme.color.RED,
          },
        ]}
      >
        <Text style={{ color: theme.color.black, textAlign: "center" }}>
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
