import { Layout, Footer, ErrorBoundary, Header } from "~components";
import GlobalStyle from "./global.style";
import { ThemeProvider } from "styled-components";
import themes from "./themes";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "~redux";

const App = () => {
  const [theme, setTheme] = useState(themes[0]);

  useEffect(() => {
    const cachedTheme = localStorage.getItem("theme");
    if (cachedTheme) {
      const currentTheme = themes.find((t) => t.title === cachedTheme);
      if (currentTheme) {
        setTheme(currentTheme);
      }
    }
  }, []);

  const switchTheme = (themeTitle: string) => {
    const selectedTheme = themes.find((t) => t.title === themeTitle);
    if (selectedTheme) {
      setTheme(selectedTheme);
      localStorage.setItem("theme", themeTitle);
    } else {
      throw "INVALID THEME";
    }
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ErrorBoundary>
          <Header setTheme={switchTheme} />
          <Layout></Layout>
          <Footer />
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  );
};

export default React.memo(App);
