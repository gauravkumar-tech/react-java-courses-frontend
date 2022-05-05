import './App.css';
import LoginForm from './components/Login-components/LoginForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './components/dashBoard/Dashboard';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>

  );
}


export default App;
