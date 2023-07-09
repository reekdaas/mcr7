import { createContext, useContext } from "react";

const AppContext = createContext(null);

export default function AppContextProvider({ children }) {
  const value = {};
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  return context;
}
