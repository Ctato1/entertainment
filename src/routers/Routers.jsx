import React, { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Favorites = lazy(() => import("../pages/Favorites"));
const Movies = lazy(() => import("../pages/Movies"));
const Series = lazy(() => import("../pages/Series"));
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));

const Routers = () => {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    if (isLoggedIn) {
      return;
    }
  }, [isLoggedIn]);

  // Redirect to the login page if not logged in and not on the login or signup route
  if (!isLoggedIn && location.pathname !== "/login" && location.pathname !== "/signup") {
    return <Navigate to="/login" />;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes location={location}>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Suspense>
  );
};

export default Routers;
