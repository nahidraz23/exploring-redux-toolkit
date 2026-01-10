import AddTaskModal from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { selectTask } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTask);
  // const filter = useAppSelector(selectFilter);

  console.log(tasks);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex mt-10 items-center justify-between">
        <h1 className="text-center text-3xl font-bold text-teal-500">Tasks</h1>
        <AddTaskModal/>
      </div>

      <div className="flex flex-col gap-4">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id}/>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
