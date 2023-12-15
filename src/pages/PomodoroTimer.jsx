// src/App.js
import { useState, useEffect } from "react";
// import Spotify from './Spotify';
import Iframe from "react-iframe";

export default function Timer() {
  const [time, setTime] = useState(1500); // Tempo in secondi (25 minuti)
  const [isActive, setIsActive] = useState(false);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(1500);
  };

  useEffect(() => {
    let interval;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  return (
    <div className='bg-red-600/80 dark:bg-[#1A1A1A]'>

    <div className="flex flex-col items-center justify-center min-h-screen">

      <div className="flex flex-col items-center mt-8">
      <div className="relative group transition-transform transform-gpu">
        <img src="../src/assets/pomodoroTimer.png" alt="Pomodoro Timer"
          className="mb-8 scale-100 group-hover:scale-105 transition-transform duration-300 ease-in-out" />
      </div>
      </div>

        <div className="bg-red-500 p-8 rounded-lg text-white text-center shadow-md">
          <div className="gap-4 flex justify-between mb-7">
            <button
              onClick={() => setTime(1500)}
              className="bg-[#EA3712] px-4 py-2 rounded hover:bg-red-700 font-semibold text-white shadow-md"
            >
              {" "}
              Pomodoro Timer
              {/* 15000 */}
            </button>

            <button
              onClick={() => setTime(300)}
              className="bg-[#EA3712] px-4 py-2 rounded hover:bg-red-700 font-semibold text-white shadow-md"
            >
              {" "}
              Short Break
              {/* 300 */}
            </button>

            <button
              onClick={() => setTime(900)}
              className="bg-[#EA3712] px-4 py-2 rounded hover:bg-red-700 font-semibold text-white shadow-md"
            >
              {" "}
              Long Pause
              {/* 900 */}
            </button>
          </div>

          <div className="border-b border-white p-5 mb-5">
            <div className="text-8xl font-semibold">{formatTime(time)}</div>
          </div>
          <div className="space-x-7">
            <button
              onClick={handleStart}
              className="bg-green-500 px-4 py-2 rounded hover:bg-green-700 shadow-md"
            >
              {" "}
              <img
                className="h-[20px]"
                src="/src/assets/Play.png"
                alt="Start"
              />
              {/* START */}
            </button>

            <button
              onClick={handlePause}
              className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-700 shadow-md"
            >
              {" "}
              <img
                className="h-[20px]"
                src="/src/assets/pausa.png"
                alt="pausa"
              />
              {/* PAUSA */}
            </button>

            <button
              onClick={handleReset}
              className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-700 shadow-md"
            >
              {" "}
              <img
                className="h-[20px]"
                src="/src/assets/reset.png"
                alt="reset"
              />
              {/* RESET */}
            </button>
          </div>

          <div>
            <h3 className='"border-b border-white p-6 mb-3"'>
              È ora di concentrarsi!
            </h3>
          </div>

          {/* Spotify */}
          <div className="flex justify-center">
            <Iframe
              style="border-radius:12px"
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcCnTAt8CfNe?utm_source=generator"
              width="80%"
              height="152"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></Iframe>
          </div>
        </div>
      </div>

      {/* Contenitore 2 */}
      <div className="bg-red-500/80 p-8 mt-20">
        <div className="flex flex-col items-center text-white text-center justify-center min-h-screen">
          {/* Spiegazione dell'utilizzo */}
          <h4 className="font-medium text-4xl p-8">
            La tecnica del pomodoro per maggiore produttività e meno stress!
          </h4>
          <img
            src="/src/assets/img/tecnica-del-pomodoro-come-funziona-1024x512.webp"
            alt="scheda tecnica"
          />
          <div className="container mx-auto text-justify">
            <p className="font-regual p-8 gap-15">
              Forse hai già sentito parlare della tecnica del pomodoro, quello
              che non sai è che non si tratta di una semplice leggenda, se sai
              come metterla in pratica funziona davvero. Imprenditori, liberi
              professionisti o dipendenti, tutto posso imparare e utilizzare
              questa strategia per una migliore e più pratica gestione del
              tempo. La produttività è una caratteristica fondamentale da
              acquisire per migliorare tantissimi ambiti della propria vita.
              Dallo studio, ai progetti personali fino al lavoro quotidiano in
              azienda, la produttività determina la qualità della tua vita e dei
              risultati che ottieni. Ma come si incrementa la produttività?
              Questa è la domanda da un milione di euro. Attraverso una corretta
              gestione del tempo. Riuscire a gestire il proprio tempo in modo
              proficuo, ossia eliminando le distrazioni e i tempi morti, ti
              consente di raggiungere più velocemente l’obiettivo che ti sei
              prefissato e di avere anche del tempo a disposizione per te
              stesso. Questo è ciò che io chiamo essere produttivi. La tecnica
              del pomodoro è una delle strategie più efficaci (e aggiungerei
              infallibile) con cui puoi gestire al meglio il tuo tempo. Anche se
              hai già sentito nominare questo metodo, forse non conosci le mie 3
              regole personali che applico quotidianamente per riuscire a
              renderla più efficace. Conoscere qualche piccola variante già
              testata può aiutarti a rendere più efficaci i tuoi pomodori e ad
              ottimizzare al meglio il tuo lavoro.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
