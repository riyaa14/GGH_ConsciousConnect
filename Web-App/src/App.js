import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Components/nav-bar";
import Community from "./Pages/Community";
import Login from "./Pages/Login";
import Shop from "./Pages/shop";
import Challenges from "./Pages/challenges";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" &&
        location.pathname !== "/login" &&
        location.pathname !== "/forgot/password" && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/community" element={<Community />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/challenges" element={<Challenges />} />
      </Routes>
    </div>
  );
}

export default App;
