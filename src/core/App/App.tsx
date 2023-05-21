import { GlobalStyle } from "./GlobalStyle";
import { Normalize } from "styled-normalize";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
