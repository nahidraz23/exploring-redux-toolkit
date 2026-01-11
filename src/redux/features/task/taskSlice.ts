import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "zV_y8rClYL26k1-tgcSS5",
      isCompleted: false,
      title: "Learning Redux ",
      description: "I am learning Redux ",
      priority: "high",
      dueDate: "2026-01-10T18:00:00.000Z",
    },
  ],
  filter: "all",
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
  return {
    id: nanoid(),
    isCompleted: false,
    ...taskData,
  };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      //   const id = uuidv4();

      //   const taskData = {
      //     id,
      //     ...action.payload,
      //     isCompleted: false,
      //   };

      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toggleIsCompleted: (state, action: PayloadAction<string>) => {
      console.log(action);
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action: PayloadAction<ITask>) => {
      const task = state.tasks.find((t) => t.id === action.payload.id)        

      if(task) {
        task.title = action.payload.title;
        task.description = action.payload.description;
        task.priority = action.payload.priority;
        task.dueDate = action.payload.dueDate;
      }
    },
    updateFilter: (
      state,
      action: PayloadAction<"all" | "low" | "medium" | "high">
    ) => {
      state.filter = action.payload;
    },
  },
});

export const selectTask = (state: RootState) => {
  const filter = state.todo.filter;

  if (filter === "low") {
    return state.todo.tasks.filter((task) => task.priority === "low");
  } else if (filter === "medium") {
    return state.todo.tasks.filter((task) => task.priority === "medium");
  } else if (filter === "high") {
    return state.todo.tasks.filter((task) => task.priority === "high");
  } else {
    return state.todo.tasks;
  }

  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const {
  addTask,
  toggleIsCompleted,
  deleteTask,
  updateTask,
  updateFilter,
} = taskSlice.actions;

export default taskSlice.reducer;
