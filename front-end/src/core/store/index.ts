import { configureStore } from '@reduxjs/toolkit';
import user from './slices/userSlice';
import file from './slices/fileSlice';

export const store = configureStore({
    reducer: { user, file },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
