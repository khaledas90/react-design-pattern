import React from "react";
import { useState } from "react";
import ToDo from "./ToDo";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
export default function TodoApp() {
  const [title, setTitle] = useState<string>("");
  const [toDos, setToDos] = useState<Array<Todo>>([]);

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

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
    <ToDo
      todos={toDos}
      newTodo={title}
      HandleToDo={HandleToDo}
      changeStatus={changeStatus}
      onValueChange={onValueChange}
    />
  );
}
