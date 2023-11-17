import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getSearchValueFromLocalStorage } from '../../utils/getSearchValueFromLocalStorage';
import { SearchShowsData, ShowData } from '../../models/interfaces';
import { DEFAULT_ITEMS_PER_PAGE } from '../../constants/page.constants';

export interface SearchState {
  searchValue: string;

  shows: ShowData[] | SearchShowsData[];
  isLoading: boolean;
  isError: boolean;

  currentPage: number;

  switchMoreShows: boolean;
}

const initialState: SearchState = {
  searchValue: getSearchValueFromLocalStorage(),

  shows: [],
  isLoading: false,
  isError: false,

  currentPage: 0,

  switchMoreShows: false,
};

export const SearchSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setShows(state, action: PayloadAction<ShowData[] | SearchShowsData[]>) {
      state.shows = action.payload;
    },
    setSwitchMoreShows(state, action: PayloadAction<boolean>) {
      state.switchMoreShows = action.payload;
    },
    setIsError(state, action: PayloadAction<boolean>) {
      state.isError = action.payload;
    },

    handleSearch(state, action: PayloadAction<ShowData[] | SearchShowsData[]>) {
      if (!state.searchValue) {
        // await loadShows(currentPage);
        state.switchMoreShows = state.shows.length >= DEFAULT_ITEMS_PER_PAGE;
        return;
      }

      state.shows = action.payload;
      state.isLoading = false;
      state.currentPage = 0;
    },
  },
});

export const selectShows = (state: RootState): SearchState => state.shows;
export const { setSearchValue, setShows, setSwitchMoreShows, setIsError, handleSearch } =
  SearchSlice.actions;
export default SearchSlice.reducer;
