// Main.jsx
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/Home";
import RoomPage from "../pages/RoomPage";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:id" element={<RoomPage />} />
        {/* Puedes agregar más rutas según sea necesario */}
      </Routes>
    </main>
  );
};

export default Main;
