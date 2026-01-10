import React from "react";
import tasks_logo from "@/assets/tasks_logo.svg";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggler";

const Navbar = () => {
  return (
    <nav className="container mx-auto h-16 flex items-center justify-between gap-3">
      <div>
        <Link
          to={"/"}
          className="flex items-center gap-2 py-3"
        >
          <img
            className="h-12"
            src={tasks_logo}
            alt=""
          />
          <span className="font-bold">Taskly</span>
        </Link>
      </div>
      <div className="flex gap-3 font-bold">
        <Link to={"/tasks"}>Tasks</Link>
        <Link to={"/users"}>Users</Link>
      </div>
      <div className="flex gap-1">
        <Button>Login</Button>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
