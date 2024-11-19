import Header from "@/components/common/header";
import SegmentedControl from "@/components/common/seg";
import { theme } from "@/utils/function/color/constant";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import { Menu } from "./components/menu";
import { MenuList } from "@/utils/menu";
import { SlidePng } from "@/assets/icons";
import { Recommend } from "./components/recommend";

const { height: screenHeight } = Dimensions.get("window");

export const Home = () => {
  const [isRecommendFullScreen, setIsRecommendFullScreen] = useState(false);

  const handleScroll = (event: any) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    const threshold = 500;
    setIsRecommendFullScreen(scrollY >= threshold);
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollContainer}
      >
        <SegmentedControl
          list={[
            { text: "추천", link: "home", path: "/home" },
            { text: "전체", link: "notice", path: "/notice" },
            { text: "가전제품", link: "homework", path: "/homework" },
            { text: "굿즈", link: "notice", path: "/notice" },
            { text: "의료", link: "homework", path: "/homework" },
            { text: "무료나눔", link: "notice", path: "/notice" },
          ]}
          selected={"/home"}
        />
        <Image source={SlidePng} />
        <View style={styles.menuStyle}>
          {MenuList.map((item) => (
            <Menu {...item} key={item.to} />
          ))}
        </View>
        <View
          style={[
            styles.recommendContainer,
            isRecommendFullScreen && styles.recommendFullScreen,
          ]}
        >
          <Recommend />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: theme.color.black,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  menuStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    paddingVertical: 24,
    backgroundColor: theme.color.backgroundblack,
    rowGap: 20,
  },
  recommendContainer: {
    height: screenHeight,
    backgroundColor: theme.color.backgroundblack,
    justifyContent: "center",
    alignItems: "center",
  },
  recommendFullScreen: {
    height: screenHeight,
    backgroundColor: theme.color.black,
  },
});
