import Dashboard from './Dashboard';
import './App.css';
import {Route, Routes } from 'react-router-dom';
import Form from './component/Form';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route exact path='/form' element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
