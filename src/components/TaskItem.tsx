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
    <div className="flex p-4 items-start justify-between gap-4 w-full bg-[#262626] rounded-lg mt-3">
      <div className="rounded-full bg-black">
        <CheckboxComponent
          handleConclusedTasks={handleConclusedTasks}
          checked={task.isCompleted}
        />
      </div>
      <div className="flex flex-1">
        {task.isCompleted ? (
          <p className="font-inter text-base leading-5 line-through text-[#F2F2F2]">
            {task.content}
          </p>
        ) : (
          <p className="font-inter text-base leading-5 text-[#F2F2F2]">
            {task.content}
          </p>
        )}
      </div>
      <div>
        <button onClick={handleDeleteTask} className="hover:bg-">
          <Trash size={20} className="text-[#808080]" />
        </button>
      </div>
    </div>
  );
}
