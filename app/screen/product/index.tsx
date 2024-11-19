import Header from "@/components/common/header";
import SegmentedControl from "@/components/common/seg";
import { theme } from "@/utils/function/color/constant";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import List from "./components/list";
import { useGetProductList } from "@/apis/product";
import { SafeAreaView } from "react-native-safe-area-context";

type changeEventType = {
  text: string;
  name: string;
};

export const Product = () => {
  const { data: ProductList } = useGetProductList();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = ({ text }: changeEventType) => {
    setSearchQuery(text.toLowerCase());
  };

  const filteredProductList = ProductList?.filter((item) =>
    item.title.toLowerCase().includes(searchQuery)
  );

  return (
    <SafeAreaView style={[styles.container]}>
      <Header searchChange={handleSearchChange} />
      <SegmentedControl
        list={[
          { text: "추천", link: "recommend", path: "/recommend" },
          { text: "전체", link: "all", path: "/all" },
          {
            text: "가전제품",
            link: "homeAppliances",
            path: "/homeAppliances",
          },
          { text: "굿즈", link: "goods", path: "/goods" },
          { text: "의료", link: "medical", path: "/medical" },
          { text: "무료나눔", link: "free", path: "/free" },
        ]}
        selected={"/recommend"}
      />
      <ScrollView>
        {filteredProductList?.map((item) => (
          <List
            id={item.id}
            key={item.id}
            img={item.imageUrl}
            title={item.title}
            date={item.createdDate.slice(0, 10)}
            price={item.price}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.color.black,
  },
});
