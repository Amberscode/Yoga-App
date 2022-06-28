import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Schedule from "./pages/Schedule";
import Contact from "./pages/Contact";
import ClassDetail from "./pages/ClassDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="about" element={<About />} />
      <Route path="schedule" element={<Schedule />} />
      <Route path="contact" element={<Contact />} />
      <Route path="classdetail" element={<ClassDetail />} />
    </Routes>
  </BrowserRouter>
);
