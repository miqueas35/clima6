import React from 'react';
import axios from 'axios';
import { useCiudadContext } from '../../providers/DataCiudad';
import { useClimaToggleContext, useClimaContext } from '../../providers/DataClima';

const Sidebar = ({ setInputCity }) => {
  const ciudades = useCiudadContext();
  const setClima = useClimaToggleContext();
  const clima = useClimaContext();
  console.log(clima);
  return (
    <div className='container-fluid'>
      <div className='row vh-100'>
        <div className='col-12'>
          <input type="text" placeholder='Ciudad' onChange={(e) => setInputCity(e.target.value) }/>
          <select onChange={ async (e) => {
            const weather = await axios(`http://api.weatherapi.com/v1/current.json?key=6be8c28794924ed8a2a184922222905&q=${e.target.value}`);
            setClima(weather.data);
          }} >
            {ciudades?.map(ciudad => <option key={ciudad.id} >{ciudad.name}</option>)}
          </select>
        </div>
        <div className='col-12'>
          {clima && <h2>{clima.location.name}</h2>}
          {clima && <h2>{clima.location.localtime}</h2>}
          {clima && <h2>{clima.current.temp_c}</h2>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
