import React, { useEffect, useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import ThemedComponent from "@/test";
import * as Font from "expo-font";
import { Text } from "react-native";

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
      <ThemedComponent />
    </QueryClientProvider>
  );
}

export default App;
