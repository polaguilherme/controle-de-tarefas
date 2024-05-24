import { Trash } from "phosphor-react";
import { CheckboxComponent } from "./CheckBox";

interface TaskItems {
  id: string;
  content: string;
  isCompleted: boolean;
}

interface TaskItemProps {
  task: TaskItems;
  deleteTaskOnList: (taskId: string) => void;
  onConclusedTasks: (taskId: string) => void;
  checked: boolean;
}

export function TaskItem({
  task,
  deleteTaskOnList,
  onConclusedTasks,
}: TaskItemProps) {
  function handleDeleteTask() {
    deleteTaskOnList(task.id);
  }

  function handleConclusedTasks() {
    onConclusedTasks(task.id);
  }

  return (
    <div className="flex p-4 items-start justify-between gap-4 w-full bg-Gray-500 rounded-lg mt-3">
      <div className="rounded-full">
        <CheckboxComponent
          handleConclusedTasks={handleConclusedTasks}
          checked={task.isCompleted}
        />
      </div>
      <div className="flex flex-1">
        {task.isCompleted ? (
          <p className="font-inter text-base leading-5 line-through text-Gray-300 transition-colors duration-500">
            {task.content}
          </p>
        ) : (
          <p className="font-inter text-base leading-5  text-Gray-100 transition-colors duration-500">
            {task.content}
          </p>
        )}
      </div>
      <div>
        <button
          onClick={handleDeleteTask}
          className=" hover:bg-Gray-400 hover:w-6 hover:h-6 flex items-center justify-center hover:rounded "
        >
          <Trash size={20} className="text-Gray-300 hover:text-red-500" />
        </button>
      </div>
    </div>
  );
}
