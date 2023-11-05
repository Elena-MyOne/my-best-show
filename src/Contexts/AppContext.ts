import { createContext } from 'react';
import { SearchShowsData, ShowData } from '../models/interfaces';

export type AppStateType = {
  handleSearch(): Promise<void>;
  isLoading: boolean;
  error: Error | null | unknown;
  loadShows: (page: number) => Promise<void>;
  isShowMoreButtonDisable: boolean;
  currentPage: number;
  shows: ShowData[];
  currentPageItems: ShowData[] | SearchShowsData[] | null;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  prevPage: number | null;
  nextPage: number | null;
  isCardItemsDarked: boolean;
  setIsCardItemsDarked: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext<Partial<AppStateType>>({});
