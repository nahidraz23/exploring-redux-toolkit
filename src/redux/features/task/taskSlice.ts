import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "task1",
      title: "Demo Task1",
      description: "This is a demo task1",
      dueDate: "2026-01-11",
      isCompleted: false,
      priority: "High",
    },
     {
      id: "task2",
      title: "Demo Task2",
      description: "This is a demo task2",
      dueDate: "2026-01-11",
      isCompleted: false,
      priority: "Medium",
    },
     {
      id: "task3",
      title: "Demo Task3",
      description: "This is a demo task3",
      dueDate: "2026-01-11",
      isCompleted: false,
      priority: "Low",
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTask = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
