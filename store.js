import { configureStore } from '@reduxjs/toolkit'
import postsSlice from './postsSlice'
// import usersReducer from './features/users/userSlice';

export const store = configureStore({
  reducer: {
   posts:postsSlice
  },
})