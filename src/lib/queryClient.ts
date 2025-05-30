import { QueryClient } from "@tanstack/react-query";

// In the standalone version, we don't need complex API handling
// since we're not connecting to a backend server.
// This is a simplified version of the queryClient.

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});