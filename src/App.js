import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserModalProvider } from "./context/modalContext";
import Home from "./pages/home";
import Place from "./pages/place";
import OPDNFT from "./pages/OPDNFT";
import MAP from "./pages/map";
import OPDLAB from "./pages/OPDLAB";
import About from "./pages/about";
import { Global } from "@emotion/react";
import { globalStyles } from "./assets/styles/globalStyle";

function App() {
  return (
    <BrowserRouter>
      <UserModalProvider>
        <Global styles={globalStyles} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/place" element={<Place />} />
          <Route path="/map" element={<MAP />} />
          <Route path="/OPD_NFT" element={<OPDNFT />} />
          <Route path="/OPD_LAB" element={<OPDLAB />} />
          <Route path="/about-us" element={<About />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </UserModalProvider>
    </BrowserRouter>
  );
}

export default App;
