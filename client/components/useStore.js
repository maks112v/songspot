import React, { useState, createContext, useContext } from "react";

export const storeContext = createContext({});

export const useStore = () => useContext(storeContext);

export default function Store({ children }) {
  const [auth, setAuth] = useState(null);

  return (
    <storeContext.Provider value={{ auth }}>{children}</storeContext.Provider>
  );
}
