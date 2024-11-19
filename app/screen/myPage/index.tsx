import { BackIcon, More, People } from "@/assets/icons";
import { font, theme } from "@/utils/function/color/constant";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserSimpleInfo, userDetailInfo } from "@/apis/users";
import Product from "./components/product";

export const MyPage = () => {
  const { data: myInfo } = UserSimpleInfo();
  const { data: DetailData } = userDetailInfo(myInfo?.userId!);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <BackIcon />
          <More />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
          <People Fill={theme.color.white} />
          <View>
            <Text
              style={[font.body["16-medium"], { color: theme.color.GRAY[400] }]}
            >
              {myInfo?.userId}
            </Text>
            <Text style={[font.title["24-bold"], { color: theme.color.white }]}>
              {myInfo?.nickname}
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={[
              font.subTitle["20-bold"],
              { color: theme.color.white, marginBottom: 16 },
            ]}
          >
            판매 상품
          </Text>
          <ScrollView>
            <View style={styles.recommendStyle}>
              {DetailData?.products?.map((item) => (
                <Product
                  img={item.imageUrl}
                  price={item.price}
                  content={item.title}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.backgroundblack,
    height: "100%",
    paddingHorizontal: 32,
    paddingVertical: 22,
    gap: 40,
  },
  profile: {},
  recommendStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    rowGap: 20,
    columnGap: 1,
    marginBottom: 50,
  },
});
