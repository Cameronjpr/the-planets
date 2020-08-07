import { createSlice } from '@reduxjs/toolkit';

export const cardSlice = createSlice({
  name: 'card',
  initialState: {
    value: 2,
  },
  reducers: {
    increment: state => state.value += 1,
    decrement: state => state.value -= 1,
    setValue: (state, value) => { state.value = value.payload }
  },
});

export const { increment, decrement, setValue } = cardSlice.actions;

export const selectCard = state => state.card.value;

export default cardSlice.reducer;
