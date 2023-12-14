import { useState } from "react";

export default function Home() {
  const [lista, setLista] = useState([]);
  const [nuovaTask, setTask] = useState("");

  function controllaCambio(event) {
    setTask(event.target.value);
  }

  function aggiungiTask() {
    const task = {
      id: lista.length === 0 ? 1 : lista[lista.length - 1].id + 1,
      taskName: nuovaTask,
    };
    const newArray = [...lista, task];
    setLista(newArray);
  }

  function elimaTask(id) {
    setLista(lista.filter((task) => task.id !== id));
  }

  return (
    <div className="bg-[#1A1A1A] h-[calc(100vh-80px)]">
      <div className="h-[50vh] flex justify-center items-center gap-[8px]">
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
      <div className="text-white">ciao</div>

      <div className="h-[50vh] flex justify-center items-center flex-col">
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
