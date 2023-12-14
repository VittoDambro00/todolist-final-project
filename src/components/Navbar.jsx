import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center bg-[#E25858]/90 h-[80px] p-4 font-medium text-white w-full  top-0 left-0">
      <div className="flex flex-row justify-center items-center gap-4">
        <img src="https://freesvg.org/img/pomodorotimer.png" alt="logo" className="h-[70px] w-[70px]" />
        <h1>To-Do List</h1>
      </div>
      <div className="flex flex-row gap-4">
        <Link to="/">Home</Link>
        {/* <Link to="/pomodorotimer">Pomodoro Timer</Link> */}
        <h1>PomodoroTimer</h1> {/*provvisorio, da sostituire con quello sopra*/}
        <h1>Username</h1>
      </div>
    </nav>
  );
}
