import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Clients from './components/clients';
import Sidebar from './components/sideBar';
import Home from './components/home';
import User from './components/user';
import Credit from './components/credit';
import ClientDetails from './components/clientDetail';

function App() {
  const [count, setCount] = useState(0);

  return (
    
    <Router>
      <Routes>
      <Route path="/home" element={<Home />} />
        <Route path="/client" element={<Clients />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/user" element={<User />} />
        <Route path="/credit" element={<Credit />} />
        <Route path="/client/:id" element={<ClientDetails />} />



      </Routes>
    </Router>
  );
}

export default App;
