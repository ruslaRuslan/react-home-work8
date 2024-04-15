import { createContext } from "react";

export const DataContext = createContext("");

import React from "react";

const DataContextProvider = ({ children }) => {
  return (
    <>
      <DataContext.Provider value="Ruslanin Datasi">
        {children}
      </DataContext.Provider>
    </>
  );
};

export default DataContextProvider;
