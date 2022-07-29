import { configureStore } from '@reduxjs/toolkit';

import counter from './sample/counterSlice';
import todos from './sample/todoSlice';
import noticeSlice from'./sample/noticeSlice'

export default configureStore({
  reducer: {
    board: noticeSlice,
    counter,
    todos
  }
});
