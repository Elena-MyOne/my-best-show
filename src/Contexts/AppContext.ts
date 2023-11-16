import React, { createContext } from 'react';
import { ShowData } from '../models/interfaces';

export type AppStateType = {
  handleSearch(): Promise<void>;
  isLoading: boolean;
  error: Error | null | unknown;
  loadShows: (page: number) => Promise<void>;
  switchMoreShows: boolean;
  currentPage: number;
  shows: ShowData[];
  currentPageItems: ShowData[];
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  prevPage: number | null;
  nextPage: number | null;
  isCardItemsDarked: boolean;
  setIsCardItemsDarked: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext<Partial<AppStateType>>({});
