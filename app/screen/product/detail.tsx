import Header from "@/components/common/header";
import { font, theme } from "@/utils/function/color/constant";
import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Heart, HeartFill, LightningIcon, SlidePng } from "@/assets/icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Button from "@/components/common/button";
import {
  TouchableOpacity,
} from "react-native-gesture-handler";

export const ProductDetail = () => {
  const [isLike, setIsLike] = useState<boolean>(false);

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
            이나경
          </Text>
          <Text
            style={[
              font.body["10-regular"],
              {
                color: theme.color.white,
              },
            ]}
          >
            chojang0124
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
          2024-08-19
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
            보노보노 혁명전차
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
            판매중
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
            가전제품
          </Text>
          <Text
            style={[
              font.body["16-regular"],
              {
                color: theme.color.GRAY[300],
              },
            ]}
          >
            15
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
          원은지가 오송주를 제압할 때 사용했던 혁명전차입니다. 사용감 좀
          있으니까 예민하신분은 다른 매물 알아봐주세요.네고 불가능합니다.
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
        <TouchableOpacity
        onPress={() => setIsLike(!isLike)}
        >
          {
            <Heart Fill={theme.color.GRAY[600]}/>
            //isLike ? (<Heart Fill={theme.color.GRAY[600]}/>) : (<HeartFill Fill={theme.color.YELLOW} />)
          }
        </TouchableOpacity>
        <View
          style={{
            width: 1,
            height: 62,
            backgroundColor: theme.color.GRAY[700],
            marginStart: 28,
          }}
        >

        </View>
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
            20,000,000원
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
