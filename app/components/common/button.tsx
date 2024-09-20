import { font, theme } from "@/utils/function/color/constant";
import React from "react";
import {
  Text,
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

interface ButtonProps {
  children: string;
  disabled?: boolean;
  onPress: (e?: GestureResponderEvent, id?: string) => void;
  id?: string;
}

export default function Button({
  children,
  disabled,
  onPress,
  id,
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={(e) => onPress(e, id)}
      style={[
        styles.container,
        {
          backgroundColor: disabled
            ? theme.color.GRAY[300]
            : theme.color.YELLOW,
          width: "100%",
          padding: 8,
        },
      ]}
      disabled={disabled}
    >
      <Text
        style={[
          styles.text,
          { color: theme.color.black },
          font.subTitle["18-medium"],
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
  },
  text: {
    textAlign: "center",
    padding: 8,
  },
});
