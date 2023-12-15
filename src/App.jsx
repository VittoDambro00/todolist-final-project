import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as React from 'react';
import Navbar from "./components/Navbar.jsx";
import WelcomeScreen from "./pages/WelcomeScreen.jsx";
import Error404 from "./pages/Error404.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import PomodoroTimer from "./pages/PomodoroTimer";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pomodoroTimer" element={<PomodoroTimer />} />
          <Route path="/error404" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}