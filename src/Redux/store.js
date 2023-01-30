import { configureStore } from '@reduxjs/toolkit';
import UserReduce from './UserSlice';

 const store = configureStore({
  reducer: {
    user : UserReduce
  },
});
export default store;