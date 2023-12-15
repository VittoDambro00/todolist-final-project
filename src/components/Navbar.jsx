import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [nomeUtenteInserito, setNomeUtenteInserito] = useState("");
  console.log(nomeUtenteInserito);

  useEffect(() => {
    const nomeUtenteInserito = JSON.parse(localStorage.getItem("nomeUtente"));
    if (nomeUtenteInserito) {
      setNomeUtenteInserito(nomeUtenteInserito);
      console.log(nomeUtenteInserito);
    }
  }, []);

  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  } else {
    return (
      <nav className="flex flex-row justify-between items-center bg-[#E25858]/90 h-[80px] p-4 font-medium text-white w-full top-0 left-0">
        <div className="flex flex-row justify-center items-center gap-4">
          <img
            src="https://freesvg.org/img/pomodorotimer.png"
            alt="logo"
            className="h-[70px] w-[70px]"
          />
          <h1>To-Do List</h1>
        </div>
        <div className="flex flex-row gap-4 text-white">
          <Link to="/home">Home</Link>
          <Link to="/pomodoroTimer">Pomodoro timer</Link>
          <h1 className="flex justify-center items-center">
            {nomeUtenteInserito}
          </h1>
        </div>
      </nav>
    );
  }
}
