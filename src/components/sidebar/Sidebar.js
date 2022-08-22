import React from 'react';
import axios from 'axios';
import { useClimaContext } from '../../providers/DataClima';

const Sidebar = ({ setInputCity }) => {
  const ciudades = useClimaContext();
  console.log(ciudades);
  return (
    <div className='container-fluid'>
      <div className='row vh-100'>
        <div className='col-3'>
          <input type="text" placeholder='Ciudad' onChange={(e) => setInputCity(e.target.value) }/>
          <select onChange={ async (e) => {
            const weather = await axios(`http://api.weatherapi.com/v1/current.json?key=6be8c28794924ed8a2a184922222905&q=${e.target.value}`);
            console.log(weather);
          }} >
            {ciudades?.map(ciudad => <option key={ciudad.id} >{ciudad.name}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
