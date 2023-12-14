
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PomodoroTimer from './pages/PomodoroTimer';

export default function App() {
return (
    <div>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/pomodoroTimer" element={<PomodoroTimer />} />
        </Routes>
      </Router>
    </div>
  );
}