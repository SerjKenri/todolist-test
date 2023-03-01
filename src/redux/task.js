import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        task: [],
    },

    reducers: {
        addNewTask: (state, { payload }) => {
            state.task.push(payload);
        },

        toggleStatus: (state, { payload }) => {
            state.task = state.task.map(task =>
                task.id === payload ? { ...task, status: !task.status } : task
            );
        },
    },
});

export const { addNewTask, toggleStatus } = taskSlice.actions;
export const rootReducer = taskSlice.reducer;
