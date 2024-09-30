import { BackIcon } from "@/assets/icons";
import Button from "@/components/common/button";
import Input from "@/components/common/input";
import { font, theme } from "@/utils/function/color/constant";
import { useNavigation } from "@react-navigation/native";
import React, { ChangeEvent, useState } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export type changeEventType = {
  text: string;
  name: string;
};

export const Signin = () => {
  const navigation = useNavigation();
  const [data, setData] = useState({
    nickName: "",
    id: "",
    password: "",
  });
  const [passwordCheck, setPasswordCheck] = useState<string>("");

  const disabled =
    !!!data.nickName || !!!data.id || !!!data.password || !!!passwordCheck;

  const isNotMatchPassword =
    data.password !== passwordCheck && passwordCheck.length !== 0;

  const handleChange = ({ text, name }: changeEventType) => {
    setData({ ...data, [name]: text });
  };

  const handlePasswordCheckChange = ({ name, text }: changeEventType) => {
    setPasswordCheck(text);
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
      <View>
        <View
          style={{
            paddingVertical: 22,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackIcon />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 16,
          }}
        >
          <Text
            style={[
              font.title["36"],
              {
                color: theme.color.white,
              },
            ]}
          >
            회원가입
          </Text>
          <Text
            style={[
              font.body["16-medium"],
              {
                color: theme.color.GRAY[400],
              },
            ]}
          >
            SUPER BAD에 오신 것을 환영합니다
          </Text>
        </View>
        <View
          style={{
            marginTop: 54,
            gap: 32,
          }}
        >
          <Input
            onChange={handleChange}
            name="nickName"
            label="닉네임"
            value={data.nickName}
            placeholder="닉네임 (2~8)"
          />
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
            label="비밀번호"
            password
            value={data.password}
            placeholder="비밀번호 (8~16)"
          />
          <View>
            <Input
              onChange={handlePasswordCheckChange}
              name="passwordCheck"
              label="비밀번호 확인"
              password
              value={passwordCheck}
              placeholder="비밀번호 재입력"
            />
            {isNotMatchPassword && (
              <Text
                style={[
                  font.body["14-medium"],
                  {
                    color: theme.color.RED,
                    marginTop: 4,
                  },
                ]}
              >
                비밀번호가 일치하지 않습니다.
              </Text>
            )}
          </View>
        </View>
      </View>
      <Button
        onPress={() => navigation.navigate("홈" as never)}
        disabled={disabled}
      >
        회원가입
      </Button>
    </View>
  );
};
