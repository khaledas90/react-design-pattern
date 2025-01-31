import { useState } from "react";

interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}
export default function BadToDo() {
  const [title, setTitle] = useState<string>("");
  const [toDos, setToDos] = useState<Array<ToDo>>([]);

  const HandleToDo = () => {
    setToDos([...toDos, { id: Math.random(), title: title, completed: false }]);
    setTitle("");
  };

  const changeStatus = (idx: number) => () => {
    const newToDos = [...toDos];
    newToDos[idx].completed = !newToDos[idx].completed;
    setToDos(newToDos);
  };

  return (
    <>
      <div className="BadToDo">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <span onClick={HandleToDo}>Add ToDo</span>

        <div className="">
          {toDos.map((toDo: ToDo, idx) => (
            <ul>
              <li
                key={idx}
                onClick={changeStatus(idx)}
                style={{
                  textDecoration: toDo.completed ? "line-through" : "none",
                  color: "red",
                }}
              >
                {toDo.title}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
