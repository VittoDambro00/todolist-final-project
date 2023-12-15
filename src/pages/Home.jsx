import { useEffect, useState } from "react";
import notepad from "../assets/img/Clipboard.png";
import trash from "../assets/img/trash.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [lista, setLista] = useState([]);
  const [nuovaTask, setTask] = useState("");
  const [singolTask, setsingolTask] = useState(0);
  const [taskCompleted, setTaskCompleted] = useState(0);

  function controllaCambio(event) {
    setTask(event.target.value);
  }

  function aggiungiTask() {
    if (nuovaTask !== "") {
      document.getElementById("text-input").value = "";
      const task = {
        id: lista.length === 0 ? 1 : lista[lista.length - 1].id + 1,
        taskName: nuovaTask,
      };
      setsingolTask(singolTask + 1);
      const newArray = [...lista, task];
      setLista(newArray);
      setTask("");
    } else if (nuovaTask === "nino") {
      console.log("ciaooo");
    }
  }

  function elimaTask(id) {
    setLista(lista.filter((task) => task.id !== id));
    setsingolTask(singolTask - 1);
    if (taskCompleted >= singolTask) {
      setTaskCompleted(taskCompleted - 1);
    }
  }

  // API Aos per fade toDo

  useEffect(() => {
    AOS.init();
  }, []);

  function checkTask() {
    const check = document.querySelectorAll("input:checked");
    console.log(check);
    setTaskCompleted(check.length);
  }

  // useEffect(() => {
  // }, []);

  return (
    <div className="bg-red-600/80 dark:bg-[#1A1A1A] min-h-screen flex justify-center items-center flex-col">
      {/* <h1 className="text-4xl text-white mt-[100px]">{quotes}</h1> */}
      <div className="h-[25vh] flex justify-center items-center gap-4 w-[80wh]">
        <input
          id="text-input"
          className=" min-w-[60vw] h-[5vh] rounded-[8px] p-[16px] dark:bg-[#262626] bg-white hover:border-0 dark:text-white text-black"
          type="text"
          onChange={controllaCambio}
        />
        <button
          className="flex dark:text-white text-[#E25858] w-max-[20vw] h-[5vh] rounded-[8px] p-4 dark:bg-[#E25858] bg-white items-center justify-center" 
          onClick={aggiungiTask}
        >
          Invio
        </button>
      </div>

      <div className="w-[50vw] flex justify-center items-center flex-col mb-[100px]">
        <div className="flex justify-between text-white w-[90vw] mt-[100px] mb-[100px]">
          <div className="h-0 dark:text-[#E25858]">
            Task created{" "}
            <span className="dark:bg-slate-600 bg-white p-[3px] rounded-full dark:text-white text-[#E25858]">
              {singolTask}
            </span>
          </div>
          <div className="h-0 dark:text-[#E25858]">
            <span className="dark:bg-slate-600 bg-white p-[3px] rounded-full dark:text-white text-[#E25858]">
              0
            </span>{" "}
            Tasks completed
          </div>
        </div>
        {singolTask === 0 && (
          <div className="h-[25vh] flex justify-center items-center flex-col gap-3 dark:text-[#808080] text-white text-center">
            <img src={img} alt="clip-icon" className="h-[56px] w-[56px]" />
            <p>
              Non hai ancora attività registrate <br /> Crea attività e
              organizza le tue cose da fare
            </p>
          </div>
        )}

        {lista.map((task, index) => {
          return (
            <div
              data-aos="fade-right"
              className="text-center dark:bg-slate-600 bg-white rounded-lg p-[5px] m-1 w-[300px]"
              key={index}
            >
              <div>
                <input
                  type="checkbox"
                  name=""
                  id={index}
                  className="mr-5 accent-[#e25858] "
                  value={task.taskName}
                  onClick={checkTask}
                />
               <label htmlFor={index}>{task.taskName}</label>
              </div>
              <button
                onClick={() => elimaTask(task.id)}
                className="text-red-600 font-bold ml-7"
              >
                <img src={trash} alt="trash" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
//Ciao Paolo, spero tu risolva
