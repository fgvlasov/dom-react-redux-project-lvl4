import { createContext, useContext, useState } from "react";

const Context = createContext();

export function MatchProvider({ children }) {
  const [match, setMatch] = useState("_01_appic");
  const [showMenu, setShowMenu] = useState(true);
  return (
    <Context.Provider value={([match, setMatch], [showMenu, setShowMenu])}>
      {children}
    </Context.Provider>
  );
}

export function useMatchContext() {
  return useContext(Context);
}
