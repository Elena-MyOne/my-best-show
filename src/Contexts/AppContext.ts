import { createContext } from 'react';

export type AppState = {
  handleSearch(): Promise<void>;
};

export const AppContext = createContext<Partial<AppState>>({});
