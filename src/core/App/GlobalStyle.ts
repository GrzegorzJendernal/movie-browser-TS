import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,::after,::before {
        box-sizing: inherit;
    }

    body {
        min-height: 100vh;
        margin: 0;
        font-family: 'Poppins', sans-serif;
      	background-color: ${({ theme }) => theme.colors.background};
	    	word-break: break-word;
    }
`;
