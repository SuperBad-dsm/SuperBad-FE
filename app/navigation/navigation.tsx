import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import * as _ from "@/screen";
import Home from "@/assets/icons/home";
import { font, theme } from "@/utils/function/color/constant";
import { Text } from "react-native";
import Cart from "@/assets/icons/cart";
import Plus from "@/assets/icons/plus";
import Chat from "@/assets/icons/chat";
import Prople from "@/assets/icons/people";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? route.name;
        return {
          tabBarStyle: {
            backgroundColor: routeName === "홈" ? "#fff" : "#000",
            paddingHorizontal: 32,
            paddingVertical: 8,
            height: 70,
            paddingBottom: 6,
          },
        };
      }}
    >
      <Tab.Screen
        name="로그인"
        component={_.Login}
        options={{
          tabBarButton: () => null,
          headerShown: false,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="회원가입"
        component={_.Signin}
        options={{
          tabBarButton: () => null,
          headerShown: false,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="홈"
        component={_.Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Home Fill={focused ? theme.color.black : theme.color.GRAY[300]} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                {
                  color: focused ? theme.color.black : theme.color.GRAY[300],
                },
                font.body["14-medium"],
              ]}
            >
              홈
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="상품"
        component={_.Product}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Cart Fill={focused ? theme.color.YELLOW : theme.color.GRAY[300]} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                {
                  color: focused ? theme.color.YELLOW : theme.color.GRAY[300],
                },
                font.body["14-medium"],
              ]}
            >
              상품
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="등록"
        component={_.Registration}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Plus Fill={focused ? theme.color.YELLOW : theme.color.GRAY[300]} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                {
                  color: focused ? theme.color.YELLOW : theme.color.GRAY[300],
                },
                font.body["14-medium"],
              ]}
            >
              등록
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="슈퍼챗"
        component={_.SuperChat}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Chat Fill={focused ? theme.color.YELLOW : theme.color.GRAY[300]} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                {
                  color: focused ? theme.color.YELLOW : theme.color.GRAY[300],
                },
                font.body["14-medium"],
              ]}
            >
              슈퍼챗
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="MY"
        component={_.MyPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Prople
              Fill={focused ? theme.color.YELLOW : theme.color.GRAY[300]}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                {
                  color: focused ? theme.color.YELLOW : theme.color.GRAY[300],
                },
                font.body["14-medium"],
              ]}
            >
              MY
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
