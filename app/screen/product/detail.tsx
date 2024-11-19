import Header from "@/components/common/header";
import { font, theme } from "@/utils/function/color/constant";
import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Heart, HeartFill, LightningIcon, SlidePng } from "@/assets/icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Button from "@/components/common/button";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { instance } from "@/utils/function/api/instance";
import { path } from "@/constants";
import { Product } from "@/@types/type";
import { useRoute } from "@react-navigation/native";
import { RouteProp } from '@react-navigation/native';


interface DetailProp {
  id: number
}
type DetailParam = {
  ProductDetail: {
    id: number;
  };
};

//type Navigation = NativeStackHeaderProps & DetailParams;

export const ProductDetail = () => {
  //const route = useRoute<RouteProp<DetailParam, 'ProductDetail'>>();
    //const { id } = route.params;

  const [isLike, setIsLike] = useState<boolean>(false);

  const [error, setError] = useState<boolean>(false);

  const [data, setData] = useState<Product>();

  const getDetailData = () => {    
    return useMutation({
      mutationFn: () => instance.get<Product>(`${path.products}/1`),
      onError: (error) => {
        console.log(error);
      },
      onSuccess: async (res) => {
        setData(res.data);
      },
    });
  };

  const { mutate: detailFn } = useMutation<AxiosResponse, AxiosError>({
    mutationFn: () => instance.get(`${path.products}/1`),
    onError: (error) => {
      setError(true);
      console.log(error);
    },
    onSuccess: async (res) => {
      const { token } = res.data;
    }
    
  })

  return (
    <View
      style={{
        backgroundColor: theme.color.black,
        height: "100%",
        justifyContent: "flex-start",
      }}
    >
      <Image source={SlidePng}></Image>
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 14,
          paddingHorizontal: 32,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            height: 38,
            width: 38,
            borderRadius: 100,
          }}
          source={SlidePng}
        ></Image>
        <View
          style={{
            height: "100%",
            flexDirection: "column",
            paddingStart: 14,
          }}
        >
          <Text
            style={[
              font.body["18-bold"],
              {
                color: theme.color.white,
              },
            ]}
          >
            {data?.seller.nickname}
          </Text>
          <Text
            style={[
              font.body["10-regular"],
              {
                color: theme.color.white,
              },
            ]}
          >
            {data?.seller.userId}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
          }}
        ></View>
        <Text
          style={[
            font.body["16-semibold"],
            {
              color: theme.color.white,
            },
          ]}
        >
          {data?.createdDate}
        </Text>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: theme.color.GRAY[700],
        }}
      ></View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 32,
          paddingVertical: 28,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Text
            style={[
              font.title["24-bold"],
              {
                color: theme.color.white,
              },
            ]}
          >
            {data?.title}
          </Text>
          <Text
            style={[
              font.subTitle["18-semibold"],
              {
                color: theme.color.YELLOW,
                paddingStart: 10,
              },
            ]}
          >
            {data?.status}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={[
              font.body["16-semibold"],
              {
                color: theme.color.GRAY[300],
              },
            ]}
          >
            {data?.category}
          </Text>
          <Text
            style={[
              font.body["16-regular"],
              {
                color: theme.color.GRAY[300],
              },
            ]}
          >
            {data?.heartCount}
          </Text>
        </View>
        <Text
          style={[
            font.body["18-regular"],
            {
              color: theme.color.white,
              marginTop: 24,
            },
          ]}
        >
          {data?.content}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: theme.color.GRAY[700],
          width: "100%",
          height: 1,
        }}
      ></View>
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 10,
          paddingHorizontal: 32,
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => setIsLike(!isLike)}>
          {isLike ? (
            <Heart Fill={theme.color.GRAY[600]} />
          ) : (
            <HeartFill Fill={theme.color.YELLOW} />
          )}
        </TouchableOpacity>
        <View
          style={{
            width: 1,
            height: 62,
            backgroundColor: theme.color.GRAY[700],
            marginStart: 28,
          }}
        ></View>
        <View
          style={{
            flexDirection: "column",
            marginStart: 12,
          }}
        >
          <Text
            style={[
              font.title["26-medium"],
              {
                color: theme.color.white,
              },
            ]}
          >
            {data?.price}원
          </Text>
          <Text
            style={[
              font.body["16-medium"],
              {
                color: theme.color.GRAY[400],
              },
            ]}
          >
            가격 제안 불가
          </Text>
        </View>
        <View
          style={{
            flex: 1,
          }}
        ></View>
        <TouchableOpacity
          onPress={() => {}}
          style={[
            styles.container,
            {
              backgroundColor: theme.color.YELLOW,
              width: "100%",
              paddingHorizontal: 18,
              paddingVertical: 10,
              flexDirection: "row",
              alignItems: "center",
            },
          ]}
        >
          <LightningIcon Fill="#000000" width={15} height={18} />
          <Text
            style={[
              font.body["16-semibold"],
              {
                color: theme.color.GRAY[800],
                marginStart: 4,
              },
            ]}
          >
            CHAT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
  },
  text: {
    textAlign: "center",
    padding: 8,
  },
});
