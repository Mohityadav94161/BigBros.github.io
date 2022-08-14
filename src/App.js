import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Header";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/Signin/Signin";
import Home from "./pages/Home/Home";

import About from "./pages/AboutUs/about";

import Contact from "./pages/ContactUs/contact";

import Footer from "./components/Footer/footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/about" element={<About />} />

          <Route exact path="/contact" element={<Contact />} />

          <Route exact path="/signIn" element={<SignIn />} />
        </Routes>

        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
