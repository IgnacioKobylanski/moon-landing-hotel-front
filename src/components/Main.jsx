import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/Home";
import RoomPage from "../pages/RoomPage";
import RoomList from "./RoomList";
import HotelInfo from "../pages/HotelInfo";
import Gallery from "../pages/Gallery";
import EventsMain from "../pages/EventsMain";
import ContactUs from "../pages/ContactUs";
import Cart from "./Cart";
import EventDetail from "./EventDetail";
import CreateUser from "../pages/CreateUser";
import Login from "./Login";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/room/:id" element={<RoomPage />} />  
                <Route path="/rooms" element={<RoomList />} />
                <Route path="/hotel-info" element={<HotelInfo />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/events" element={<EventsMain />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/event/:id" element={<EventDetail />} />
                <Route path="/create-user" element={<CreateUser />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </main>
    );
};

export default Main;


/*Do not delete this
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/Home";
import RoomPage from "../pages/RoomPage";
import RoomList from "./RoomList";
import HotelInfo from "../pages/HotelInfo";
import Gallery from "../pages/Gallery";
import EventsMain from "../pages/EventsMain";
import ContactUs from "../pages/ContactUs";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:id" element={<RoomPage />} />
        <Route path="/rooms" element={<RoomList />} />
        <Route path="/hotel-info" element={<HotelInfo />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<EventsMain />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </main>
  );
};

export default Main;
 */