import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { deleteTask, toggleIsCompleted } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import type { ITask } from "@/types";
import { Trash2 } from "lucide-react";
import UpdateTaskModal from "./UpdateTaskModal";
import { selectUser } from "@/redux/features/user/userSlice";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUser);

  const assignedUser = users.find((user) => user.id === task.assignedTo);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Badge
            variant={"default"}
            className={cn("h-3 w-3 rounded-full px-1", {
              " bg-green-500": task.priority === "low",
              " bg-yellow-500": task.priority === "medium",
              " bg-red-500": task.priority === "high",
            })}
          />
          <CardTitle
            className={cn({ "line-through": task.isCompleted }, "flex gap-6")}
          >
            <h1>{task.title}</h1>
            <h3 className="text-sky-400"> - {assignedUser ? assignedUser?.name : "No one"}</h3>
          </CardTitle>
        </div>
        <CardDescription>
          <h1>{task?.description}</h1>
        </CardDescription>
        <CardAction className="flex items-center gap-2">
          <Trash2
            className="text-red-500 h-4"
            onClick={() => dispatch(deleteTask(task.id))}
          />
          <Checkbox
            checked={task.isCompleted}
            onClick={() => dispatch(toggleIsCompleted(task.id))}
          />
        </CardAction>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter>
        <UpdateTaskModal task={task} />
      </CardFooter>
    </Card>
  );
};

export default TaskCard;
