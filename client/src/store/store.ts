import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useDispatch, useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { api } from '../state/api';

interface TimeState {
  totalTime: number;
}

const initialState: TimeState = {
  totalTime: 0,
};

const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    setTotalTime: (state, action: PayloadAction<number>) => {
      state.totalTime = action.payload;
    },
  },
});

export const { setTotalTime } = timeSlice.actions;

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    time: timeSlice.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
