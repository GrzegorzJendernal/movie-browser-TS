import { GlobalStyle } from "./GlobalStyle";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import Header from "../../common/Header/Header";

const App = () => {

  return (
    <ThemeProvider theme={theme}>
	    <Normalize/>
      <GlobalStyle />
	    <Header/>
    </ThemeProvider>
  );
}

export default App;
