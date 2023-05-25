import { GlobalStyle } from "./GlobalStyle";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import Header from "../../common/Header/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Header/>
	    <Outlet/>
    </ThemeProvider>
  );
};

export default App;
