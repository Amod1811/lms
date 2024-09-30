
import './App.css';
import './Components/Nav'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseCategory from './Components/CourseCategory';
import Home from './Components/HomeComponent/Home';
import Nav from './Components/Nav';
import Footer from './Components/Footer'

function App() {
  return (
    <>
    <Nav/>
    <Home/>
    <CourseCategory/>
    <Footer/>
    </>
  );
}

export default App;
