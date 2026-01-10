import TaskCard from "@/components/module/tasks/TaskCard";
import { selectFilter, selectTask } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTask);
  // const filter = useAppSelector(selectFilter);

  console.log(tasks);

  return (
    <div className="flex flex-col gap-10">
      <div className="mt-10">
        <h1 className="text-center text-3xl font-bold text-teal-500">Tasks</h1>
      </div>

      <div className="flex flex-col gap-4">
        {tasks.map((task) => (
          <TaskCard task={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
