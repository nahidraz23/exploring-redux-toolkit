import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    task: ITask[]
}

const initialState: InitialState = {
  task: [
    {
      id: "task1",
      title: "Demo Task",
      description: "This is a demo task",
      dueDate: "2026-01-11",
      isCompleted: false,
      priority: "High",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
