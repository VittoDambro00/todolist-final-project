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
        id: lista.length === 0 ? 0 : lista[lista.length - 1].id + 1,
        taskName: nuovaTask,
        completed: false,
      };
      setsingolTask(singolTask + 1);
      const newArray = [...lista, task];
      setLista(newArray);
      console.log(lista);
      setTask("");
      console.log(nuovaTask);
    }
  }

  function eliminaTask(id) {
    const taskToDelete = lista.find((task) => task.id === id);

    if (taskToDelete.completed) {
      setTaskCompleted(taskCompleted - 1);
    }
    const nuovaLista = lista.filter((task) => task.id !== id);
    setLista(nuovaLista);
    setsingolTask(singolTask - 1);
    if (taskCompleted >= singolTask) {
      setTaskCompleted(taskCompleted - 1);
    }
  }

  // API Aos per fade task toDo
  useEffect(() => {
    AOS.init();
  }, []);

  function checkTask(id) {
    
    const updatedLista = lista.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    const completedCount = updatedLista.filter((task) => task.completed).length;
    setLista(updatedLista);
    setTaskCompleted(completedCount);
  }

  // Il seguente codice aggiunge un event listener che ascolta l'evento "keydown" del documento.
  // Se il tasto premuto è "Enter", viene chiamata la funzione "aggiungiTask()".
  function handleKeyDown(e) {
    if (e.key === "Enter" && nuovaTask !== "") {
      aggiungiTask();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="bg-[#191919] min-h-[calc(100vh-80px)] flex justify-center items-center flex-col">
      <div className="h-[25vh] flex justify-center items-center gap-[8px]">
        <input
          id="text-input"
          className="w-[639px] h-[54px] rounded-[8px] p-[16px] gap-[8px] bg-[#262626] hover:border-0 text-white"
          type="text"
          onChange={controllaCambio}
        />
        <button
          className="text-white w-[89px] h-[52px] border-0 rounded-[8px] p-[16px] gap-[8px] bg-[#E25858]"
          onClick={aggiungiTask}
        >
          Invio
        </button>
      </div>

      <div className="w-[736px] flex justify-center items-center flex-col mb-[100px]">
        <div className="flex justify-between text-white w-[736px] mt-[100px] mb-[100px]">
          <div className="h-0 text-[#E25858]">
            Task created{" "}
            <span className="bg-slate-600 p-[3px] rounded-full text-white">
              {singolTask}
            </span>
          </div>
          <div className="h-0 text-[#E25858]">
            <span className="bg-slate-600 p-[3px] rounded-full text-white">
              {taskCompleted}
            </span>{" "}
            Tasks completed
          </div>
        </div>
        {singolTask === 0 && (
          <div className="h-[25vh] flex justify-center items-center flex-col gap-3 text-[#808080] text-center">
            <img src={notepad} alt="clip-icon" className="h-[56px] w-[56px]" />
            <p>
              Non hai ancora attività registrate <br /> Crea attività e
              organizza le tue cose da fare
            </p>
          </div>
        )}

        {lista.map((task, index) => {
          return (
            <div
              data-aos="fade-down"
              className="text-white gap-[12px] flex items-center justify-between  bg-[#262626] p-[16px] m-1 w-[736px] h-[56px]"
              key={index}
            >             
              <div
                id={index}
                onClick={() => {
                  checkTask(task.id);
                }}
                className="hover:cursor-pointer"
              >
                {task.completed ? "✅" : "❌"}
              </div>
              {task.taskName}
              <div
                id={index}
                className="hover:cursor-pointer"
                onClick={() => eliminaTask(task.id)}
              >
                <img src={trash} alt="trash" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
//Ciao Paolo, spero tu risolva
