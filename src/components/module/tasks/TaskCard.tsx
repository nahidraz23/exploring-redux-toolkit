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
import type { ITask } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
            <Badge variant={"default"} className={cn("h-3 w-3 rounded-full px-1", {
                " bg-green-500" : task.priority === 'low',
                " bg-yellow-500" : task.priority === 'medium',
                " bg-red-500" : task.priority === 'high'
            })}/>
            <CardTitle>{task.title}</CardTitle>
        </div>
        <CardDescription>{task.description}</CardDescription>
        <CardAction className="flex items-center gap-2">
          <Trash2 className="text-red-500 h-4" />
          <Checkbox />
        </CardAction>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default TaskCard;
