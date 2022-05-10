import './App.css';
import LoginForm from './components/Login-components/LoginForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './components/dashBoard/Dashboard';
import AllCourses from './components/sidemenuComponents/AllCourses';
import AddCourse from './components/sidemenuComponents/AddCourse';
import YourCourses from './components/sidemenuComponents/YourCourses';
import MainProfile from './components/ProfileComponent/MainProfile';
import Settings from './components/SettingsComponent/Settings';
import Helpus from './components/HelpusComponent/Helpus';
import AllUsersDashBoard from './components/allusers/AllUsersDashBoard';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/allCourses" element={<AllCourses />} />
      <Route path="/yourCourses" element={<YourCourses />} />
      <Route path="/addCourses" element={<AddCourse />} />
      <Route path="/profile" element={<MainProfile />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/helpus" element={<Helpus />} />
      <Route path="/allusers" element={<AllUsersDashBoard />} />
    </Routes>
  </Router>

  );
}


export default App;
