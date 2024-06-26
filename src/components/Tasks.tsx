import { PlusCircle } from "phosphor-react";
import ClipBoard from "../assets/Clipboard.png";
import { TaskItem } from "./TaskItem";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface Task {
  id: string;
  content: string;
  isCompleted: boolean;
}

export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [createdTasks, setCreatedTasks] = useState(0);
  const [conclusedTasks, setConclusedTasks] = useState(0);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  function addNewTasksOnList(event: FormEvent) {
    event.preventDefault();

    const newTaskObject = {
      id: uuidv4(),
      content: newTask,
      isCompleted: false,
    };

    const updatedTasks = [...tasks, newTaskObject];
    setTasks(updatedTasks);
    setNewTask("");
    setCreatedTasks((state) => state + 1);

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  function handleNewTaskOnInput(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function deleteTaskOnList(taskId: string) {
    const newTasksUpdated = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasksUpdated);
    setCreatedTasks((prevCount) => prevCount - 1);
    localStorage.setItem("tasks", JSON.stringify(newTasksUpdated));
  }

  function onConclusedTasks(taskId: string) {
    const updatedTasksOnConclused = tasks.map((task) => {
      if (task.id === taskId) {
        task.isCompleted = !task.isCompleted;
        if (task.isCompleted) {
          setConclusedTasks(conclusedTasks + 1);
        } else {
          setConclusedTasks(conclusedTasks - 1);
        }
      }
      return task;
    });

    setTasks(updatedTasksOnConclused);
    localStorage.setItem("tasks", JSON.stringify(updatedTasksOnConclused));
  }

  const isNewTaskEmpty = newTask.length === 0;

  return (
    <>
      <div className="flex items-center justify-center gap-3 w-full -mt-16">
        <form
          className="flex items-center justify-center gap-3 w-full"
          onSubmit={addNewTasksOnList}
        >
          <input
            type="text"
            className="flex-grow p-4 items-center bg-Gray-500 rounded-lg text-white placeholder:text-Gray-300"
            placeholder="Adicione uma nova tarefa"
            value={newTask}
            onChange={handleNewTaskOnInput}
            required
          />
          <button
            disabled={isNewTaskEmpty}
            className="bg-Blue-dark p-4 flex items-center justify-center font-bold text-Gray-100 gap-2 rounded-lg disabled:cursor-not-allowed disabled:opacity-90"
          >
            Criar
            <PlusCircle size={24} />
          </button>
        </form>
      </div>
      <div className="w-full flex items-center justify-center mt-16 flex-col">
        <header className="flex justify-between w-full max-w-2xl">
          <div className="flex">
            <p className="text-Blue-primary font-bold leading-normal text-sm gap-2">
              Tarefas Criadas{" "}
              <span className="text-Gray-200 bg-Gray-400 py-0.5 px-2 rounded-full">
                {createdTasks}
              </span>
            </p>
          </div>
          <div className="flex">
            <p className="text-Purple-primary font-bold leading-normal text-sm gap-2">
              Tarefas Concluídas{" "}
              {tasks.length === 0 ? (
                <span className="text-Gray-200 bg-Gray-400 py-0.5 px-2 rounded-full">
                  0
                </span>
              ) : (
                <span className="text-Gray-200 bg-Gray-400 py-0.5 px-2 rounded-full">
                  {conclusedTasks} de {createdTasks}
                </span>
              )}
            </p>
          </div>
        </header>
        {tasks.length === 0 ? (
          <section className="mt-6 py-16 px-4 border-t border-Gray-400 rounded-lg flex items-center justify-center flex-col w-full max-w-2xl">
            <img src={ClipBoard} alt="" className="mb-4" />
            <strong className="leading-6 text-base font-inter text-Gray-300">
              Você ainda não tem tarefas cadastradas
            </strong>
            <p className="font-normal leading-6 text-base font-inter text-Gray-300">
              Crie tarefas e organize seus itens a fazer
            </p>
          </section>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              deleteTaskOnList={deleteTaskOnList}
              onConclusedTasks={onConclusedTasks}
              checked={task.isCompleted}
            />
          ))
        )}
      </div>
    </>
  );
}
