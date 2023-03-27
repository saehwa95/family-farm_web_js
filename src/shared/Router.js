import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
// import Introduction from "../pages/Introduction";
import LocationInfo from "../pages/LocationInfo";
import Main from "../pages/Main";
import Order from "../pages/Order";
// import Purchase from "../pages/Purchase";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/intro" element={<Introduction />} /> */}
        <Route path="/order" element={<Order />} />
        <Route path="/location" element={<LocationInfo />} />
        {/* <Route path="/purchase" element={<Purchase />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
