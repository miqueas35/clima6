import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCiudadToggleContext } from '../../providers/DataCiudad';
import Sidebar from '../../components/sidebar/Sidebar';

const Home = () => {
  const setCiudad = useCiudadToggleContext();
  const [inputCity, setInputCity] = useState();
  const getDataCiudad = async () => {
    if (inputCity?.length > 3) {
      try {
        const data = await axios(`http://api.weatherapi.com/v1/search.json?key=6be8c28794924ed8a2a184922222905&q=${inputCity}`);
        setCiudad(data.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getDataCiudad();
  }, [inputCity]);

  return (
    <div>
      <Sidebar setInputCity={setInputCity} />
    </div>
  );
};

export default Home;
