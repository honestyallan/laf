import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ClickToComponent } from "click-to-react-component";

import "@/utils/i18n";

import useSiteSettingStore from "./pages/siteSetting";
import theme from "./chakraTheme";
import darkTheme from "./chakraThemeDark";
import { CHAKRA_UI_COLOR_MODE_KEY } from "./constants";
import routes from "./routes";

import "./App.css";

function RouteElement() {
  const element = useRoutes(routes as any);
  return element;
}

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      cacheTime: 0,
    },
  },
});

function APP() {
  useTranslation();

  const getSiteSettings = useSiteSettingStore((state) => state.getSiteSettings);

  const [colorMode, setColorMode] = useState(localStorage.getItem(CHAKRA_UI_COLOR_MODE_KEY));
  useEffect(() => {
    function onColorModeChange() {
      const colorMode = localStorage.getItem(CHAKRA_UI_COLOR_MODE_KEY);
      setColorMode(colorMode);
    }
    window.addEventListener("ColorModeChange", onColorModeChange);
    return () => {
      window.removeEventListener("ColorModeChange", onColorModeChange);
    };
  });

  useEffect(() => {
    getSiteSettings();
  }, [getSiteSettings]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV === "development" ? <ClickToComponent /> : null}
        <ChakraProvider theme={colorMode === "light" ? theme : darkTheme}>
          <BrowserRouter>
            <RouteElement />
          </BrowserRouter>
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
}

export default APP;
