import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/globalStyles";
import { Helmet } from "react-helmet";
import { Layout } from "./components/Layout";
import { Routes } from "./routes";

export const ThemeContext = React.createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");
  const themeStyled = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={themeStyled}>
        <GlobalStyle />
        <Helmet>
          <title>Sidebar - Code Focus</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link reel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <>
          <Layout>
            <Routes />
          </Layout>
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
