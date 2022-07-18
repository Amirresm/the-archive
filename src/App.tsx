import { CssVarsProvider } from "@mui/joy";
import { BrowserRouter } from "react-router-dom";
import theme from "utils/theme";
import RootRouter from "./pages/Router";

function App() {
  return (
    <BrowserRouter>
      <CssVarsProvider theme={theme}>
        <RootRouter />
      </CssVarsProvider>
    </BrowserRouter>
  );
}

export default App;
