import { useState, useEffect } from "react"
import "./welcomeScreen.css"
import { Link, useNavigate } from "react-router-dom"

export default function WelcomeScreen() {

    
    const [nomeUtente, setNomeUtente] = useState("Guest");
    useEffect(() => {
      localStorage.setItem("nomeUtente", JSON.stringify(nomeUtente)); //"nomeUtente" tra apici è la chiave dell'oggettto su cui salvo i miei dati.
    }, [nomeUtente]);
    
    const navigate = useNavigate();

    const gestisciPressioneInvio = (bottonePremuto) => {
        if (bottonePremuto.key === "Enter") {
        // Redirect alla pagina iniziale Home
        navigate("/home");
        }
    };

    return  <div className="bg-[#E25858] h-[100vh] w-full flex justify-center items-center text-center moving-gradient-background">
                <div className="rounded-3xl px-4 py-1 w-[420px] flex flex-col justify-center">
                    <div className="rounded-[25px] py-10 px-10 border border-white shadow_personalizzata">
                        <p className={`text-white subpixel-antialiased tracking-wide text-4xl mb-10`}>Welcome to ToDius</p>
                        <p className={`text-white text-lg`}>Ciascun istante è un dono prezioso. Scegli come investire il tuo tempo con saggezza, poiché la somma di piccole azioni determina la grandezza di una vita straordinaria. Frase motivazionale a c* by chatGPT.</p>
                        <p className={`text-white text-lg mb-3 mt-8`}>Presentati!</p>

                        <label htmlFor="search" className="text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative opacity-95 hover:opacity-100 flex justify-center">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path style={{stroke:"currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"}}/>
                                </svg>
                            </div>
                            <input 
                                type="search" 
                                onChange={(event) => setNomeUtente(event.target.value)} 
                                onKeyDown={gestisciPressioneInvio}
                                id="search" 
                                className="block w-[246px] p-4 text-gray-900 border border-gray-300 rounded-xl bg-gray-50 hover:bg-white focus:ring-gray-500 focus:border-gray-500" 
                                placeholder="Inserisci il tuo nome" 
                                required 
                            />  
                            <Link 
                                to="/home"
                                className="text-white absolute end-[40px] bottom-2.5 bg-[#1A1A1A] hover:bg-[#E25858] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Inizia!
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
}

