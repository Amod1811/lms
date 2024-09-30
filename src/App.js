import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CourseCategory from './Components/CourseCategory';

import Nav from './Components/Nav';
import Home from './Components/Home';



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
