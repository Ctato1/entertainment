import React from "react";
import Routers from "../../routers/Routers";
import { useLocation } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import './layout.css'

const Layout = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/login" && location.pathname !== "/signup" ? (
        <div className="display__layout">
          <Sidebar />
          <Routers />
        </div>
      ) : (
        <Routers />
      )}
    </div>
  );
};

export default Layout;
