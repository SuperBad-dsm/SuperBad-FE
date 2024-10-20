import React, { useEffect, useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import * as Font from "expo-font";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "@/navigation/navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const loadFonts = () => {
  return Font.loadAsync({
    Pretendard: require("assets/fonts/Pretendard-Regular.ttf"),
  });
};
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: true,
      retryDelay: 300,
      staleTime: 10000,
    },
  },
});

function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts()
      .then(() => setFontsLoaded(true))
      .catch((error) => console.error(error));
  }, []);

  if (!fontsLoaded) {
    return <Text>cfwe</Text>;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <MainNavigator />
        </GestureHandlerRootView>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
