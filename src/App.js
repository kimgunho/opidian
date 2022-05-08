import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Place from "./pages/place";
import { Global } from "@emotion/react";
import { globalStyles } from "./assets/styles/globalStyle";

function App() {
  return (
    <BrowserRouter>
      <Global styles={globalStyles} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place" element={<Place />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
