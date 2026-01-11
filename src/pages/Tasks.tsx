import AddTaskModal from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTask, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTask);
  // const filter = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  // console.log(tasks);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex mt-10 items-center justify-end gap-5">
        <h1 className="mr-auto text-center text-3xl font-bold text-teal-500">Tasks</h1>
        <div>
          <Tabs
            defaultValue="all"
          >
            <TabsList>
              <TabsTrigger onClick={() => dispatch(updateFilter('all'))} value="all">All</TabsTrigger>
              <TabsTrigger onClick={() => dispatch(updateFilter('low'))} value="low">Low</TabsTrigger>
              <TabsTrigger onClick={() => dispatch(updateFilter('medium'))}  value="medium">Medium</TabsTrigger>
              <TabsTrigger onClick={() => dispatch(updateFilter('high'))}  value="high">High</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <AddTaskModal />
      </div>

      <div className="flex flex-col gap-4">
        {tasks.map((task) => (
          <TaskCard
            task={task}
            key={task.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
