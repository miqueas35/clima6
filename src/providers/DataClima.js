import React, { useState, useContext, createContext } from 'react';

const climaContext = createContext();
const climaToggleContext = createContext();
export const useClimaContext = () => {
  return useContext(climaContext);
};
export const useClimaToggleContext = () => {
  return useContext(climaToggleContext);
};
export const DataClima = ({ children }) => {
  const [data, setData] = useState([]);
  return (
    <climaContext.Provider value={data}>
      <climaToggleContext.Provider value={setData}>
        {children}
      </climaToggleContext.Provider>
    </climaContext.Provider>
  );
};
