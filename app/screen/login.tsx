import { LightningIcon } from "@/assets/icons";
import Button from "@/components/common/button";
import Input from "@/components/common/input";
import { font, theme } from "@/utils/function/color/constant";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { loginInstance } from "@/utils/function/api/instance";
import { path } from "@/constants";
import { AxiosError, AxiosResponse } from "axios";
import { setToken, setUserId } from "@/utils";

export type changeEventType = {
  text: string;
  name: string;
};

export const Login = () => {
  const navigation = useNavigation();
  const [data, setData] = useState({
    user_id: "",
    password: "",
  });
  const [error, setError] = useState<boolean>(false);

  const disabled = !!!data.user_id || !!!data.password;

  const handleChange = ({ text, name }: changeEventType) => {
    setData({ ...data, [name]: text });
  };

  const { mutate: loginFn } = useMutation<AxiosResponse, AxiosError>({
    mutationFn: () => loginInstance.post(`${path.auth}/login`, data),
    onError: (error) => {
      setError(true);
      console.log(error.message);
    },
    onSuccess: async (res) => {
      const { access_token } = res.data;
      await setToken(access_token, Object.values(data), "");
      setUserId(data.user_id);
      console.log(data);
      navigation.navigate("홈" as never);
    },
  });

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
          <LightningIcon />
        </View>
        <Input
          onChange={handleChange}
          name="user_id"
          label="아이디"
          value={data.user_id}
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
      <Button onPress={loginFn as any} disabled={disabled}>
        로그인
      </Button>
    </View>
  );
};
