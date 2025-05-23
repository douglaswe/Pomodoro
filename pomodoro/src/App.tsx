import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./components/Router";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export function App() {
 
  return (
    <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
      <Router />
      <GlobalStyle />
    </BrowserRouter>
    </ThemeProvider>
  )
}


