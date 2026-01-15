import AddUserModal from "@/components/module/users/AddUserModal";
import UserCard from "@/components/module/users/UserCard";
import React from "react";

const User = () => {
  return (
    <div className="flex flex-col gap-10 py-10">
      <div className="flex">
        <h1 className="mr-auto text-center text-3xl font-bold text-teal-500">
          Users
        </h1>
        <AddUserModal />
      </div>
      <div className="grid grid-cols-3">
        <UserCard />
      </div>
    </div>
  );
};

export default User;
