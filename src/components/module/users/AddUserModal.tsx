import { Button } from "@/components/ui/button";
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
import { addUser } from "@/redux/features/user/userSlice";
import type { IUser } from "@/types";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";

const AddUserModal = () => {
  const form = useForm();
    const dispatch = useDispatch()

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    dispatch(addUser(data as IUser))
  };

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button>Add User</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Please enter username</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          value={field.value || " "}
                        />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
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
          </DialogDescription>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default AddUserModal;
