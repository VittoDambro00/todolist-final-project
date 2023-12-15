import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import WelcomeScreen from "./pages/WelcomeScreen.jsx"
import Error404 from "./pages/Error404.jsx"
import Footer from "./components/Footer.jsx"
import Index from "./pages/Index.jsx"

import PomodoroTimer from './pages/PomodoroTimer';

export default function App() {
return (
     <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/error404" element={<Error404/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}