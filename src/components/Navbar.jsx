import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Theme from "./Theme";
import { slide as Menu } from 'react-burger-menu';
 

export default function Navbar() {
    const [nomeUtenteInserito, setNomeUtenteInserito] = useState("");
    const location = useLocation()

    useEffect(() => {
      const nomeUtenteInserito = JSON.parse(localStorage.getItem('nomeUtente'));
      if (nomeUtenteInserito) {
       setNomeUtenteInserito(nomeUtenteInserito);
      }
    }, []);

  return (
    <nav className="flex flex-row justify-between items-center bg-[#E25858]/90 h-[80px] p-4 font-medium text-white w-full top-0 left-0 gap-4">
     <Menu>
      <a className="menu-item" href="/home">
        Home
      </a>
      <a className="menu-item" href="/pomodoroTimer">
        Pomodoro timer
      </a>
    </Menu>
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
        {/* <h1 className="flex justify-center items-center">{nomeUtenteInserito}</h1> */}
        <Theme />
      </div>
    </nav>
  );
}