import type { RootState } from "@/redux/store";
import type { IUser } from "@/types";
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    users: [
        {
            id: 'A21Fugrl0CwA4YUY1BTYu',
            name: 'Nahid'
        },
        {
            id: '__vQgULmC5iUgjYGNbBe5',
            name: 'Riyal'
        }
    ]
}

type DraftUser = Pick<IUser,'name'>

const createUser = (userData: DraftUser) => {
    return {
        id: nanoid(),
        ...userData
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const userData = createUser(action.payload)
            state.users.push(userData)
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload)
        }
    }
})

export const selectUser = (state: RootState) => {
    return state.user.users
}

export const {addUser, deleteUser} = userSlice.actions

export default userSlice.reducer