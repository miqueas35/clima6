import React, { useEffect } from 'react';
import axios from 'axios';
import { useClimaContext, useClimaToggleContext } from '../../providers/DataClima';

const Home = () => {
  const clima = useClimaContext();
  const setClima = useClimaToggleContext();
  const getDataClima = async () => {
    try {
      const data = await axios('http://api.weatherapi.com/v1/search.json?key=6be8c28794924ed8a2a184922222905&q=tuc');
      setClima(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataClima();
  }, []);

  console.log(clima);

  return (
    <div>

    </div>
  );
};

export default Home;
