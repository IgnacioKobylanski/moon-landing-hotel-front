import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/Home";
import RoomPage from "../pages/RoomPage";
import RoomList from "./RoomList";
import HotelInfo from "../pages/HotelInfo";
import Gallery from "../pages/Gallery";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:id" element={<RoomPage />} />
        <Route path="/rooms" element={<RoomList />} />
        <Route path="/hotel-info" element={<HotelInfo />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </main>
  );
};

export default Main;
