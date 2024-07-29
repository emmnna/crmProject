import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Clients from "./components/clients";
import Sidebar from "./components/sideBar";
import Home from "./components/home";
import User from "./components/user";
import ClientDetails from "./components/clientDetail";
import Credits from "./components/credits";
import CreditDetail from "./components/creditDetail";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/client" element={<Clients />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/user" element={<User />} />
        <Route path="/credit" element={<Credits />} />
        <Route path="/client/:id" element={<ClientDetails />} />
        <Route path="/credit/:id" element={<CreditDetail />} />

      </Routes>
    </Router>
  );
}

export default App;
