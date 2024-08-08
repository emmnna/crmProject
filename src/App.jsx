import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Clients from "./components/clients";
import Sidebar from "./components/sideBar";
import Home from "./components/home";
import User from "./components/user";
import ClientDetails from "./components/clientDetail";
import Credits from "./components/credits";
import CreditDetail from "./components/creditDetail";
import 'primereact/resources/themes/saga-blue/theme.css';  
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Login from "./components/login";
import Register from "./components/register";
import NavBar from "./components/navBar";
import AddClient from "./components/AddClient";
import UpdateClient from "./components/updateClient";

function App() {
  
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/client" element={<Clients />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/navbar" element={< NavBar/>} />
        <Route path="/user" element={<User />} />
        <Route path="/credit" element={<Credits />} />
        <Route path="/client/:id" element={<ClientDetails />} />
        <Route path="/credit/:id" element={<CreditDetail />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      
        <Route path="/addClient" element={<AddClient  />} />
        <Route path="/updateClient/:id" element={<UpdateClient />} />




        

      </Routes>
    </Router>
  );
}

export default App;
