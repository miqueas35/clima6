import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import { DataClima } from './providers/DataClima';

function App() {
  return (
    <DataClima>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </DataClima>
  );
}

export default App;
