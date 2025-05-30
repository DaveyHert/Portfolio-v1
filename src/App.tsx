import { Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { PortfolioProvider } from "./contexts/PortfolioContext";
import { PortfolioMode } from "./lib/types";
import Home from "./pages/Home";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path='/'>{() => <Home />}</Route>
      <Route path='/writer'>
        {() => <Home initialMode={"writer" as PortfolioMode} />}
      </Route>
      <Route path='/dev'>
        {() => <Home initialMode={"dev" as PortfolioMode} />}
      </Route>
      <Route>{() => <NotFound />}</Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute='class' defaultTheme='light'>
        <PortfolioProvider>
          <Router />
        </PortfolioProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
