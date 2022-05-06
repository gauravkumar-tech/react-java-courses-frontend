import './App.css';
import LoginForm from './components/Login-components/LoginForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './components/dashBoard/Dashboard';
import AllCourses from './components/sidemenuComponents/AllCourses';
import AddCourse from './components/sidemenuComponents/AddCourse';
import YourCourses from './components/sidemenuComponents/YourCourses';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/allCourses" element={<AllCourses />} />
      <Route path="/yourCourses" element={<YourCourses />} />
      <Route path="/addCourses" element={<AddCourse />} />
    </Routes>
  </Router>

  );
}


export default App;
