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

import Instructor_Dashboard from './Components/Instructor_Dashboard';
import Instructor_Courses from './Components/Instructor_Courses';
import Instructor_Quiz from './Components/Instructor_Quiz';
import Instructor_earning from './Components/Instructor_earning';
import Instructor_studentlist from './Components/Instructor_studentlist';
import Instructor_order from './Components/Instructor_order';
import Instructor_Reviews from './Components/Instructor_Reviews';
import Instructor_Editprofile from './Components/Instructor_Editprofile';
import Instructor_PayOuts from './Components/Instructor_PayOuts';
import Instructor_setting from './Components/Instructor_setting';
import Instructor_Deleteprofile from './Components/Instructor_Deleteprofile';
import Sign_in from './Components/Sign_in';
import Instructor_createCourse from './Components/Instructor_createCourse';
import Instructor_Single from './Components/Instructor_Single';
import Instructor_List from './Components/Instructor_List';
import StudentDashboard from './Components/StudentDashboard';




function App() {
  return (
    <>

    <Router>
       <Nav/>
       {/* <Instructor_Dashboard/> */}
       {/* <Instructor_Courses/>
       <Instructor_Quiz/>
       <Instructor_earning/>
       <Instructor_studentlist/>
       <Instructor_order/>
       <Instructor_Reviews/>
       <Instructor_Editprofile/>
       <Instructor_PayOuts/>
       <Instructor_setting/>
       <Instructor_Deleteprofile/>
       <Sign_in/>
       <Sign_UP/>
       <Instructor_createCourse/>
       <Instructor_Single/>
       <Instructor_List/> */}
        {/* <Nav1/> */}
          <Routes>
              <Route path='/' element={ <Home/> }/>
              <Route path='/coursecategory' element={<CourseCategory/>}/>
              <Route path='/login' element={<Login/>} />
              <Route path='/signup' element={<SignUp/>} />
              <Route path='/instructordashboard' element={<Instructor_Dashboard/>}/>
              <Route path='/instructorcourses' element={<Instructor_Courses />} />
              <Route path='/instructorquiz' element={<Instructor_Quiz />} />
              <Route path='/instructorearning' element={<Instructor_earning />} />
              <Route path='/instructorstudentlist' element={<Instructor_studentlist />} />
              <Route path='/instrctororder' element={<Instructor_order />} />
              <Route path='/instructorreviews' element={<Instructor_Reviews />} />
              <Route path='/instructoreditprofile' element={<Instructor_Editprofile />} />
              <Route path='/instructorpayout' element={<Instructor_PayOuts />} />
              <Route path='/instructorsetting' element={<Instructor_setting />} />
              <Route path='/instructordelete' element={<Instructor_Deleteprofile />} />
              <Route path='/signout' element={<Sign_in />} />
          </Routes>
         
          
        <Footer/>
    </Router>
   </>
    
 
  );
}

export default App;
