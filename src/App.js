import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CourseCategory from './Components/CourseCategory';

import Nav from './Components/Nav';
import Home from './Components/Home';
import CourseList from './Components/CourseList';


function App() {
  return (
    <>
    <Nav/>
   
    <Home/>
    <CourseCategory/>
    <CourseList/>
    
    </>
  );
}

export default App;
