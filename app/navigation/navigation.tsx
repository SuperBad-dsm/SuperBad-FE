import React from "react";
import * as _ from "@/screen/index";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="로그인"
        component={_.Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="회원가입" component={_.Signin} options={{
        headerShown:false
      }}/>
    </Stack.Navigator>
  );
}
