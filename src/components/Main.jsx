import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/Home";
import RoomPage from "../pages/RoomPage";
import RoomList from "./RoomList";
import HotelInfo from "../pages/HotelInfo";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:id" element={<RoomPage />} />
        <Route path="/rooms" element={<RoomList />} />
        <Route path="/hotel-info" element={<HotelInfo />} />
      </Routes>
    </main>
  );
};

export default Main;
