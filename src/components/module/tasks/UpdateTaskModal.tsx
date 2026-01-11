import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { updateTask } from "@/redux/features/task/taskSlice";
import { useAppDispatch } from "@/redux/hook";
import type { ITask } from "@/types";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

interface IProps {
  task: ITask;
}

const UpdateTaskModal = ({task}: IProps )=> {
  const form = useForm();
  const [open, setOpen] = useState(false);
  //   const [date, setDate] = useState<Date | undefined>(undefined);

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    dispatch(updateTask({
      ...data, 
      id: task.id,
      dueDate: new Date(data.dueDate).toISOString()
    } as ITask));
  };

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button onClick={() => dispatch(updateTask(task))}>Update Task</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-106.25">
          <DialogDescription className="sr-only">
            Fill out this form to update task
          </DialogDescription>
          <DialogHeader>
            <DialogTitle>Update Task</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        defaultValue={task.title}
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        defaultValue={task.description}
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="priority"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Priority</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={task.priority} defaultValue={task.priority}/>
                      </SelectTrigger>
                      <FormControl>
                        <SelectContent defaultValue={task.priority} >
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </FormControl>

                      <FormDescription />
                      <FormMessage />
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dueDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Due Date</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value || " "}
                    >
                      <FormControl>
                        <Popover
                          open={open}
                          onOpenChange={setOpen}
                        >
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              id="date"
                              className="justify-between font-normal"
                            >
                              {field.value
                                ? field.value.toLocaleDateString()
                                : "Due Date"}
                              <ChevronDownIcon />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent
                            className="w-auto overflow-hidden p-0"
                            align="center"
                          >
                            <Calendar
                              mode="single"
                              selected={task.dueDate}
                              captionLayout="dropdown"
                              onSelect={field.onChange}
                              
                            />
                          </PopoverContent>
                        </Popover>
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </Select>
                  </FormItem>
                )}
              />
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default UpdateTaskModal;
