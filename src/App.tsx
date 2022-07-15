import { BrowserRouter } from "react-router-dom";
import RootRouter from "./pages/Router";

function App() {
  return (
    <BrowserRouter>
      <RootRouter />
    </BrowserRouter>
  );
}

export default App;
