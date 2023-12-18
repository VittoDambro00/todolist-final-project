import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Theme from "./Theme";
import { stack as Menu } from 'react-burger-menu';
import "./BurgerMenu.css";

 

export default function Navbar() {
  const [nomeUtenteInserito, setNomeUtenteInserito] = useState("");

  useEffect(() => {
    let nomeUtenteInserito = JSON.parse(localStorage.getItem("nomeUtente"));
    if (nomeUtenteInserito) {
      setNomeUtenteInserito(nomeUtenteInserito);
    }
  });

  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  } else {
    return (
      <nav className="flex flex-row justify-between items-center bg-[#E25858]/90 h-[80px] p-4 font-medium text-white w-full top-0 left-0 gap-4">
      <div className="flex flex-row justify-center items-center gap-4">
        <img
          src="https://freesvg.org/img/pomodorotimer.png"
          alt="logo"
          className="h-[70px] w-[70px]"
        />
        <h1>To-Do List</h1>
      </div>
      <div className="hidden flex-row gap-4 text-white md:flex items-center">
        <Link to="/home">Home</Link>
        <Link to="/pomodoroTimer">Pomodoro timer</Link>
        <p>Benvenuto {nomeUtenteInserito}!</p>
        <Theme />
      </div>
      <div className="flex md:hidden">
     <Menu right>
      <a className="menu-item" href="/home">
        Home
      </a>
      <a className="menu-item" href="/pomodoroTimer">
        Pomodoro timer
      </a>
      <p>Benvenuto {nomeUtenteInserito}!</p>
    </Menu>
    </div>
    </nav>
  );
  }
}