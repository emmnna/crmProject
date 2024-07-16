import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Clients from './components/clients';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/client" element={<Clients />} />
      </Routes>
    </Router>
  );
}

export default App;
