import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CourseCategory from './Components/CourseCategory';

import Nav from './Components/Nav';
import Home from './Components/Home';
<<<<<<< HEAD
// import Nav from './Components/Nav';
// import Nav1 from './Components/Nav1';
=======
import Nav from './Components/Nav';
import Nav1 from './Components/Nav1';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
>>>>>>> 7bb31a3c674b9cdab665e4d61e0bb389357e2078


function App() {
  return (
    <>
    <Nav/>


    {/* <Nav1/> */}
    <Home/>

    <CourseCategory/>
    
    </>
  );
}

export default App;
