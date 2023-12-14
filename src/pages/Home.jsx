import { useState } from "react";
import img from "../assets/img/Clipboard.png";

export default function Home() {
  const [lista, setLista] = useState([]);
  const [firstTask, setFirstTask] = useState(false);
  const [nuovaTask, setTask] = useState("");
  const [singolTask, setsingolTask] = useState(0);

  function controllaCambio(event) {
    setTask(event.target.value);
  }

  function aggiungiTask() {
    console.log(firstTask);
    setFirstTask(true);
    const task = {
      id: lista.length === 0 ? 1 : lista[lista.length - 1].id + 1,
      taskName: nuovaTask,
    };
    setsingolTask(singolTask + 1);
    const newArray = [...lista, task];
    setLista(newArray);
  }

  function elimaTask(id) {
     setLista(lista.filter((task) => task.id !== id));
     setsingolTask(singolTask - 1);
  }
  console.log(firstTask);

  return (
    <div className="bg-[#1A1A1A] min-h-[calc(100vh-80px)] flex justify-center items-center flex-col">
      <div className="h-[25vh] flex justify-center items-center gap-[8px] mt-[100px]">
        <input
          className="w-[639px] h-[54px] rounded-[8px] p-[16px] gap-[8px] bg-[#262626] hover:border-0 text-white"
          type="text"
          onChange={controllaCambio}
        />
        <button
          className="text-white w-[89px] h-[52px] rounded-[8px] p-[16px] gap-[8px] bg-[#E25858]"
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
              0
            </span>{" "}
            Tasks completed
          </div>
        </div>
        {!firstTask && (
          <div className="h-[25vh] flex justify-center items-center flex-col gap-3 text-[#808080] text-center">
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
              className="text-center bg-amber-400 rounded-lg p-[5px] m-1 w-[300px]"
              key={index}
            >
              {task.taskName}
              <button
                onClick={() => elimaTask(task.id)}
                className="text-red-600 font-bold ml-7"
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
