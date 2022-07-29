import { createSlice } from '@reduxjs/toolkit';

// 초기 상태
const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '1번 항목',
      done: true
    },
    {
      id: 2,
      text: '2번 항목',
      done: false
    }
  ]
};

let id = 3;

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    changeInput: (state, { payload: input }) => {
      state.input = input;
    },
    insert: (state, action) => {
      const todo = {
        id: id++,
        text: action.payload,
        done: false
      };
      state.todos.push(todo);
    },
    toggle: (state, { payload: id }) => {
      const index = state.todos.findIndex(todo => todo.id === id);
      state.todos[index].done = !state.todos[index].done;
    },
    remove: (state, { payload: id }) => {
      const index = state.todos.findIndex(todo => todo.id === id);
      state.todos.splice(index, 1);
    }
  }
});

export const { changeInput, insert, toggle, remove } = todoSlice.actions;

export default todoSlice.reducer;
