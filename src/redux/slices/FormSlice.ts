import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface FormState {
  name: string;
}

const initialState: FormState = {
  name: '',
};

export const FormSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export const selectShows = (state: RootState): FormState => state.form;
export const { setName } = FormSlice.actions;
export default FormSlice.reducer;
