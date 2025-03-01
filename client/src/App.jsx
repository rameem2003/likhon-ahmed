import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Rootlayout from "./layout/Rootlayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Rent from "./pages/Rent";
import Register from "./pages/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rootlayout />}>
          <Route index element={<Home />} />
          <Route path="/rent/:id" element={<Rent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
