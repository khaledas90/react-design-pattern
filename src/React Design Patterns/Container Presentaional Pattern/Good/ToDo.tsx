import { Todo } from "../Good/container";

interface ToDoProps {
  todos: Todo[];
  newTodo: string;
  HandleToDo: () => void;
  changeStatus: (idx: number) => () => void;
  onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ToDo({
  todos,
  newTodo,
  HandleToDo,
  changeStatus,
  onValueChange,
}: ToDoProps) {
  return (
    <>
      <div className="BadToDo">
        <input type="text" value={newTodo} onChange={onValueChange} />
        <span onClick={HandleToDo}>Add ToDo</span>

        <div className="">
          {todos.map((toDo, idx) => (
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
