import React, { useState, useContext, createContext } from 'react';

const ciudadContext = createContext();
const ciudadToggleContext = createContext();

export const useCiudadContext = () => {
  return useContext(ciudadContext);
};

export const useCiudadToggleContext = () => {
  return useContext(ciudadToggleContext);
};

export const dataCiudad = ({ children }) => {
  const [data, setData] = useState([]);
  return (
    <ciudadContext.Provider value={data}>
      <ciudadToggleContext.Provider value={setData}>
        {children}
      </ciudadToggleContext.Provider>
    </ciudadContext.Provider>
  );
};
