import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CircleBubble from "../CircleBubble";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CircleBubble />}></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
