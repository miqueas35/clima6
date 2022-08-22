import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import { DataClima } from './providers/DataClima';
import { DataCiudad } from './providers/DataCiudad';

function App() {
  return (
    <DataCiudad>
      <DataClima>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </BrowserRouter>
      </DataClima>
    </DataCiudad>
  );
}

export default App;
