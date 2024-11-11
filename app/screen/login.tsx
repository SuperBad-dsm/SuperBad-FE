import { LightningIcon } from "@/assets/icons";
import Button from "@/components/common/button";
import Input from "@/components/common/input";
import { font, theme } from "@/utils/function/color/constant";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export type changeEventType = {
  text: string;
  name: string;
};

export const Login = () => {
  const navigation = useNavigation();
  const [data, setData] = useState({
    id: "",
    password: "",
  });

  const disabled = !!!data.id || !!!data.password;

  const handleChange = ({ text, name }: changeEventType) => {
    setData({ ...data, [name]: text });
  };

  return (
    <View
      style={{
        backgroundColor: theme.color.black,
        height: "100%",
        paddingHorizontal: 32,
        paddingVertical: 32,
        justifyContent: "space-between",
      }}
    >
      <View style={{ gap: 32 }}>
        <View style={{ padding: 80, alignItems: "center" }}>
          <LightningIcon width={40} height={49} />
        </View>
        <Input
          onChange={handleChange}
          name="id"
          label="아이디"
          value={data.id}
          placeholder="아이디 (6~12)"
        />
        <Input
          onChange={handleChange}
          name="password"
          value={data.password}
          label="비밀번호"
          password
          placeholder="비밀번호 (8~16)"
        />
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Text
            style={[
              font.body["16-medium"],
              {
                color: theme.color.white,
              },
            ]}
          >
            계정이 없으신가요?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("회원가입" as never)}
          >
            <Text
              style={[font.body["16-semibold"], { color: theme.color.YELLOW }]}
            >
              회원가입
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Button
        onPress={() => navigation.navigate("홈" as never)}
        disabled={disabled}
      >
        로그인
      </Button>
    </View>
  );
};
