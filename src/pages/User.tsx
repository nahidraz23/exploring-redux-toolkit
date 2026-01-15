import AddUserModal from "@/components/module/users/AddUserModal";
import UserCard from "@/components/module/users/UserCard";
import {selectUser } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";


const User = () => {
    const users = useAppSelector(selectUser);

    return (
    <div className="flex flex-col gap-10 py-10">
      <div className="flex">
        <h1 className="mr-auto text-center text-3xl font-bold text-teal-500">
          Users
        </h1>
        <AddUserModal />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {
            users.map(user => (
                <UserCard user={user} key={user.id}/>
            ))
        }
      </div>
    </div>
  );
};

export default User;
