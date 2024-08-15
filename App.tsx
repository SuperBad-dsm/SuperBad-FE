import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import ThemedComponent from "@/test";
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
  return (
    <QueryClientProvider client={queryClient}>
      <ThemedComponent />
    </QueryClientProvider>
  );
}

export default App;
