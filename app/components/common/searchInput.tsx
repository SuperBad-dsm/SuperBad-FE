import { SearchIcon } from "@/assets/icons";
import { font, theme } from "@/utils/function/color/constant";
import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export type changeEventType = {
  text: string;
  name: string;
};

interface InputProps {
  value?: string;
  onChange: ({ text, name }: changeEventType) => void;
  name?: string;
  onClick?: () => void;
  type?: "send";
}

export default function SearchInput({
  name = "",
  onChange,
  value,
  onClick,
  type,
}: InputProps) {
  return (
    <View style={[styles.container]}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => onChange({ text, name })}
      />
      {type === "send" ? (
        <Text
          style={[font.subTitle["18-medium"], { color: theme.color.YELLOW }]}
          onPress={onClick}
        >
          보내기
        </Text>
      ) : (
        <SearchIcon Fill={theme.color.YELLOW} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: theme.color.GRAY[800],

    borderWidth: 1,
    borderColor: theme.color.GRAY[600],
    borderRadius: 30,
    paddingVertical: 11,
    paddingHorizontal: 24,
    height: 48,
    gap: 8,
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    color: theme.color.white,
    width: "80%",
  },
});
