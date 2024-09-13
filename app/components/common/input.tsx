import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { HiddenView } from "../layout";
import { Eye, EyeOff } from "@/assets/icons";
import { font, theme } from "@/utils/function/color/constant";

export type changeEventType = {
  text: string;
  name: string;
};

interface InputProps {
  value?: string;
  placeholder?: string;
  onChange: ({ text, name }: changeEventType) => void;
  name?: string;
  error?: boolean;
  disabled?: boolean;
  password?: boolean;
  multiLine?: number;
  label?: string;
}

export default function Input({
  value,
  placeholder,
  onChange,
  name = "",
  disabled,
  password,
  multiLine,
  label,
}: InputProps) {
  const [active, setActive] = useState<boolean>(false);
  const [visible, setVisible] = useState(false);
  return (
    <View style={{ gap: 4, backgroundColor: theme.color.black }}>
      {label && (
        <Text style={[font.body["16-semibold"], { color: theme.color.white }]}>
          {label}
        </Text>
      )}
      <View
        style={[
          style.container,
          {
            backgroundColor: theme.color.black,
            borderColor: theme.color.GRAY[100],
            borderBottomWidth: 1,
          },
        ]}
      >
        <TextInput
          style={[
            {
              color: theme.color.white,
              width: password ? "92%" : "100%",
              textAlignVertical: multiLine ? "top" : "auto",
              paddingVertical: multiLine ? 4 : 0,
              paddingHorizontal: multiLine ? 8 : 0,
            },
          ]}
          editable={!disabled}
          secureTextEntry={password && !visible}
          value={value}
          onChangeText={(text) => onChange({ text, name })}
          placeholder={placeholder}
          placeholderTextColor={theme.color.GRAY[300]}
          onBlur={() => setActive(false)}
          onFocus={() => setActive(true)}
          selectionColor={theme.color.YELLOW}
          multiline={!!multiLine}
          numberOfLines={multiLine || 1}
        />
        <HiddenView data={password}>
          {visible ? (
            <Eye OnPress={() => setVisible(!visible)} />
          ) : (
            <EyeOff OnPress={() => setVisible(!visible)} />
          )}
        </HiddenView>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 8,
    width: "100%",
    flexDirection: "row",
  },
});
