import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getSearchValueFromLocalStorage } from '../../utils/getSearchValueFromLocalStorage';

export interface SearchState {
  searchValue: string;
}

const initialState: SearchState = {
  searchValue: getSearchValueFromLocalStorage(),
};

export const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const selectSearch = (state: RootState): SearchState => state.search;
export const { setSearchValue } = SearchSlice.actions;
export default SearchSlice.reducer;
