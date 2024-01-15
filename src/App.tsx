import MainRoutes from "./routes/main-routes";
import { AuthProvider } from "./contexts/auth/auth-contexts";
import { Box, CssBaseline } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { theme } from "./utils/custome-theme";
import { ThemeProvider } from "@mui/material/styles";
import "./App.css";

/**
 * Creates a new QueryClient instance.
 * QueryClient manages queries, provides request caching,
 * implements request deduplication, and more.
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: "flex", height: "100vh" }}>
          <AuthProvider>
            <Router>
              <MainRoutes />
            </Router>
          </AuthProvider>
        </Box>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
