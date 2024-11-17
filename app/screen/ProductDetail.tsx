import Header from "@/components/common/header"
import { font, theme } from "@/utils/function/color/constant"
import React from "react"
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SlidePng } from "@/assets/icons";


export const ProductDetail = () => {

    return (
        <View
            style={{
                backgroundColor: theme.color.black,
                height: "100%",
            }}
        >
            <Header></Header>
            <Image source={SlidePng}></Image>
            <View style={{ 
                flexDirection: "row",
                height:66,
                paddingVertical: 32,
                paddingHorizontal:14
                }}>
                <Image 
                source={SlidePng}
                width={38}
                height={38}
                ></Image>
                <View>
                    <Text
                        style={[
                            font.body["18-bold"],
                            {
                                color: theme.color.white,
                            }
                        ]}
                    >
                    이나경
                    </Text>
                    <Text
                        style={[
                            font.body["10-regular"],
                            {
                                color: theme.color.white,
                            }
                        ]}
                    >
                    chojang0124
                    </Text>
                </View>
                <Text
                        style={[
                            font.body["16-semibold"],
                            {
                                color: theme.color.white,
                            }
                        ]}
                    >
                    2024-08-19
                    </Text>
            </View>
            <View>
                
            </View>
        </View>
    )
}