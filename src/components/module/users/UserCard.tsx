import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2 } from "lucide-react";

const UserCard = ({user}) => {
    return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
            <CardTitle>{user.name}</CardTitle>
        </div>
        {/* <CardDescription>{user.description}</CardDescription> */}
        <CardAction className="flex items-center gap-2">
          <Trash2 className="text-red-500 h-4"/>
          {/* <Checkbox checked={task.isCompleted} onClick={() => dispatch(toggleIsCompleted(task.id))}/> */}
        </CardAction>
      </CardHeader>
      <CardContent></CardContent>
      {/* <CardFooter>
            <UpdateTaskModal task={task}/>
      </CardFooter> */}
    </Card>
  );
};

export default UserCard;