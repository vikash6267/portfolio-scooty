import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import { useSelector } from "react-redux";
import OpenRoute from "./components/Admin/auth/OpenRoute";
import PrivateRoute from "./components/Admin/auth/PrivateRoute";
import Dashboard from "./components/Admin/Sidebar/Dashboard";
import Footer from "./components/footer/Footer"
import Scroll from "./components/scrollbar/Scroll"
import Contact from "./pages/contact/Contact"
//Admin Routes
import Login from "./components/Admin/Login";
import Download from "./components/Admin/Sidebar/Download";
const App = () => {
  const { token } = useSelector((state) => state.auth)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        
        <Route path="/admin/login" element={
        <OpenRoute>
           <Login />

        </OpenRoute>
        
        } />

<Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        > 
        
        <Route path="/admin/dashboard" 
          element={
            <PrivateRoute>
    <Download/>
            </PrivateRoute>
          }
        />
        </Route>

      </Routes>
      <Scroll />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
