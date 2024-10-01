import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CourseCategory from './Components/CourseCategory';

import Nav from './Components/Nav';
import Home from './Components/Home';

import CourseList from './Components/CourseList';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Footer from './Components/Footer';
import Nav1 from './Components/Nav1';
import StudentDashboard from './Components/StudentDashboard';



function App() {
  return (
    <>

    <Router>
       <Nav/>
        {/* <Nav1/> */}
          <Routes>
              <Route path='/' element={ <Home/> }/>
              <Route path='/coursecategory' element={<CourseCategory/>}/>
              <Route path='/login' element={<Login/>} />
              <Route path='/signup' element={<SignUp/>} />
          </Routes>
         
           <StudentDashboard/>
        <Footer/>

    </Router>
   </>
    
 
  );
}

export default App;
