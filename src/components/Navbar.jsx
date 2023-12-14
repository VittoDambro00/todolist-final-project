import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
 

export default function Navbar() {
    const [nomeUtenteInserito, setnomeUtenteInserito] = useState("");
    console.log(nomeUtenteInserito);

    useEffect(() => {
      const nomeUtenteInserito = JSON.parse(localStorage.getItem('nomeUtente'));
      if (nomeUtenteInserito) {
       setnomeUtenteInserito(nomeUtenteInserito);
       console.log(nomeUtenteInserito);
      }
    }, []);

  return (
    <nav className="flex flex-row justify-between items-center bg-[#E25858]/90 h-[80px] p-4 font-medium text-white w-full sticky top-0 left-0">
      <div className="flex flex-row justify-center items-center gap-4">
        <img
          src="https://freesvg.org/img/pomodorotimer.png"
          alt="logo"
          className="h-[70px] w-[70px]"
        />
        <h1>To-Do List</h1>
      </div>
      <div className="flex flex-row gap-4">
        <Link to="/">Home</Link>
        <h1 className="flex justify-center items-center h-screen">{nomeUtenteInserito}</h1>
        <h1>PomodoroTimer</h1> {/*provvisorio, da sostituire con quello sopra*/}
      </div>
    </nav>
  );
}
