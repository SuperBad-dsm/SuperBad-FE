import { TwsPng } from "@/assets/icons";
import { font, theme } from "@/utils/function/color/constant";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

interface ProductProps {
  img: string;
  price: number;
  content: string;
  id: number;
}

export default function Product({ img, price, content, id }: ProductProps) {
  const navigation = useNavigation();
  const path = ["상품상세", { id }] as never;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(...path)}
    >
      <Image
        source={{ uri: img }}
        width={115}
        height={135}
        borderRadius={8}
        alt="이미지없음"
      />
      <Text style={[font.body["14-semibold"]]}>{price}원</Text>
      <Text style={[font.body["14-medium"], { color: theme.color.GRAY[500] }]}>
        {content}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 115,
  },
});
