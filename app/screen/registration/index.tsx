import { Camera, XIcon } from "@/assets/icons";
import { font, theme } from "@/utils/function/color/constant";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Pressable, TouchableOpacity } from "react-native-gesture-handler";
import Input from "@/components/common/input";
import ClassButton from "./components/option";
import { CategoryData } from "@/utils/category";

export const Registration = () => {
  const [selected, setSelected] = useState<{ text: string | undefined }>({
    text: undefined,
  });
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const uploadImage = async () => {
    if (!status?.granted) {
      const permission = await requestPermission();
      if (!permission.granted) {
        return null;
      }
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
      allowsMultipleSelection: true,
    });

    if (result.canceled) {
      return null;
    }

    const uris = result.assets?.map((asset) => asset.uri);
    if (uris) {
      setImageUrls([...imageUrls, ...uris]);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{ alignSelf: "flex-end" }}>
        <XIcon Fill={theme.color.white} />
      </TouchableOpacity>
      <View>
        <Text style={[{ color: theme.color.white }, font.title["24-bold"]]}>
          상품등록
        </Text>
        <Text
          style={[{ color: theme.color.GRAY[400] }, font.body["16-medium"]]}
        >
          SUPER BAD에서 물건을 팔아보세요.
        </Text>
      </View>
      <Pressable onPress={uploadImage} style={[styles.imgContainer]}>
        <Camera />
        <Text
          style={[font.body["16-medium"], { color: theme.color.GRAY[300] }]}
        >
          사진
        </Text>
      </Pressable>
      <Input onChange={() => {}} placeholder="상품명" />
      <Input onChange={() => {}} placeholder="가격" />
      <View>
        <Text>카테고리</Text>
        {CategoryData.map((item) => (
          <ClassButton
            selected={selected}
            setSelected={setSelected}
            item={item}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.color.backgroundblack,
    paddingHorizontal: 32,
    paddingVertical: 24,
  },
  imgContainer: {
    backgroundColor: theme.color.GRAY[700],
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
});
