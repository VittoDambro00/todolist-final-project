/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";


export default function Home() {

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
        <div>
            <h1 className="text-[300px] flex justify-center items-center h-screen">{nomeUtenteInserito}</h1>
        </div>
    )
}