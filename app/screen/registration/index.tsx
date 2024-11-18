import { Camera, XIcon } from "@/assets/icons";
import { font, theme } from "@/utils/function/color/constant";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Pressable, TouchableOpacity } from "react-native-gesture-handler";
import Input from "@/components/common/input";
import ClassButton from "./components/option";
import { CategoryData } from "@/utils/category";
import Button from "@/components/common/button";
import { ProductEnum } from "@/@types/type";
import { useMutation } from "@tanstack/react-query";
import { usePostProduct } from "@/apis/product";

export type PostProductType = {
  title: string;
  content: string;
  price: string;
  category: ProductEnum | undefined;
  image: File | undefined;
};

export type changeEventType = {
  text: string;
  name: string;
};

export const Registration = () => {
  const [selected, setSelected] = useState<{ text: string | undefined }>({
    text: undefined,
  });
  const [imageUrls, setImageUrls] = useState<ImagePicker.ImagePickerAsset[]>(
    []
  );
  const [data, setData] = useState({
    title: "",
    content: "",
    category: "",
    price: "",
  });

  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const { mutate: postProduct } = usePostProduct();

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
    });

    if (result.canceled) {
      return null;
    }

    const uris = result.assets?.map((asset) => asset);
    if (uris) {
      setImageUrls([...imageUrls, ...uris]);
    }
  };

  const handleChange = ({ text, name }: changeEventType) => {
    setData((prevData) => ({
      ...prevData,
      [name]: text,
    }));
  };

  const getEnumCategory = (category: string | undefined) => {
    switch (category) {
      case "의류":
        return ProductEnum.의류;
      case "굿즈":
        return ProductEnum.굿즈;
      case "가전제품":
        return ProductEnum.가전제품;
      case "무료나눔":
        return ProductEnum.무료나눔;
      default:
        return undefined;
    }
  };

  const handleSubmit = () => {
    const formData: PostProductType = {
      title: data.title,
      content: data.content,
      price: data.price,
      category: getEnumCategory(selected.text),
      image: imageUrls[0] ? (imageUrls[0] as any) : undefined, // Cast to any temporarily
    };
    postProduct(formData);
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
        {imageUrls.length > 0 ? (
          <Image
            source={{ uri: imageUrls[0].uri }}
            style={{ width: "100%", height: "100%", borderRadius: 10 }}
          />
        ) : (
          <>
            <Camera />
            <Text
              style={[font.body["16-medium"], { color: theme.color.GRAY[300] }]}
            >
              사진
            </Text>
          </>
        )}
      </Pressable>

      <Input onChange={handleChange} name="title" placeholder="상품명" />
      <Input onChange={handleChange} name="price" placeholder="가격" />
      <View style={{ gap: 10 }}>
        <Text
          style={[font.subTitle["18-semibold"], { color: theme.color.white }]}
        >
          카테고리
        </Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          {CategoryData.map((item) => (
            <ClassButton
              selected={selected}
              setSelected={setSelected}
              item={item}
              key={item}
            />
          ))}
        </View>
      </View>
      <Input
        onChange={handleChange}
        name="content"
        placeholder="브랜드, 모델명, 상품 구매 시기, 하자 유무 등을 적어주시면 판매가 더욱 쉬워져요."
        multiLine={8}
      />
      <Button onPress={handleSubmit}>상품등록</Button>
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
    gap: 20,
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
