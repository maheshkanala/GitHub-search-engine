import React from "react";
import SearchPage from "./components/searchPage/SearchPage";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./utils/theme-utils/globalStyles";
import { useDarkMode } from "./utils/theme-utils/useDarkMode";
import ThemeToggler from "./utils/theme-utils/ThemeToggler";
import './app.scss';
import * as Themes from "./utils/theme-utils/Themes";
import { THEME } from "./constants/appConstants";
const App = () => {

  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === THEME.LIGHT ? Themes.lightTheme : Themes.darkTheme;

  if (!mountedComponent) return <div />
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="App">
          <ThemeToggler theme={theme} toggleTheme={themeToggler} />
          <SearchPage />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
