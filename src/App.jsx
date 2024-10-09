import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import { FullscreenImageContextProvider } from "./contexts/FullscreenImageContext";
function App() {

  return (
    <BrowserRouter>
      <FullscreenImageContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </FullscreenImageContextProvider>
    </BrowserRouter>
  );
}

export default App;
