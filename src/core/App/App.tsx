import { GlobalStyle } from "./GlobalStyle";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";

const App = () => {

  return (
    <ThemeProvider theme={theme}>
	    <Normalize/>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
