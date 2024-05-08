import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import { useSelector } from "react-redux";
import OpenRoute from "./components/Admin/auth/OpenRoute";
import PrivateRoute from "./components/Admin/auth/PrivateRoute";
import Dashboard from "./components/Admin/Sidebar/Dashboard";
import Footer from "./components/footer/Footer";
import Scroll from "./components/scrollbar/Scroll";
import Contact from "./pages/contact/Contact";
import Service from "./pages/services/Service";
import About from "./pages/about/About"
//Admin Routes
import Login from "./components/Admin/Login";
import Download from "./components/Admin/Sidebar/Download";
import AddOffer from "./components/Admin/Sidebar/AddOffer";
import AddService from "./components/Admin/Sidebar/AddService";
import AllOffer from "./components/Admin/Sidebar/AllOffer";
import AllService from "./components/Admin/Sidebar/AllService";
import Compare from "./pages/home/Compare";
const App = () => {
  const { token } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />

        <Route
          path="/admin/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute>
                <Download />
              </PrivateRoute>
            }
          />

          <Route
            path="/admin/add-offer"
            element={
              <PrivateRoute>
                <AddOffer />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/add-service"
            element={
              <PrivateRoute>
                <AddService />
              </PrivateRoute>
            }
          />

          <Route
            path="/admin/all-offers"
            element={
              <PrivateRoute>
                <AllOffer />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/all-service"
            element={
              <PrivateRoute>
                <AllService />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
      <Scroll />
    </BrowserRouter>
  );
};

export default App;
