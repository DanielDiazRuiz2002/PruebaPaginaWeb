import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import Header from "./Header";
import AboutUs from "./AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Prueba</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="AboutUs" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
