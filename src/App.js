import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CourseCategory from './Components/CourseCategory';
import Nav from './Components/Nav';

function App() {
  return (
    <>
    <Nav/>
    <CourseCategory/>
    </>
  );
}

export default App;
