import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./global/styles";
import Main from "./pages/Main/main";
import Routes from "./routes";

//renderizando o componente principal e os estilos globais
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Main />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
