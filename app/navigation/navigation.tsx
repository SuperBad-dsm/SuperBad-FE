import React from "react";
import * as _ from "@/screen/index";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="로그인"
        component={_.Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="회원가입" component={_.Signin} />
    </Stack.Navigator>
  );
}
