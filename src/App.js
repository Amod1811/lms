import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CourseCategory from './Components/CourseCategory';

import Nav from './Components/Nav';
import Home from './Components/Home';


import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Footer from './Components/Footer';

import StudentDashboard from './Components/StudentDashboard';

import StudentCourseList from './Components/StudentCourseList';
import StudentCourseResume from './Components/StudentCourseResume';

import StudentPaymentInfo from './Components/StudentPaymentInfo';
import StudentBookmark from './Components/StudentBookmark';
import StudentEditProfile from './Components/StudentEditProfile';

import StudentSetting from './Components/StudentSetting';
import StudentDeleteAccount from './Components/StudentDeleteAccount';
import StudentSubscription from './Components/StudentSubscription';
import AdminDashboard from './Components/AdminDashboard';




function App() {
  return (
    <>

    <Router>
       <Nav/>
        {/* <Nav1/> */}
          <Routes>
              {/* <Route path='/' element={ <Home/> }/> */}
              <Route path='/coursecategory' element={<CourseCategory/>}/>
              <Route path='/login' element={<Login/>} />
              <Route path='/signup' element={<SignUp/>} />
          </Routes>
          <AdminDashboard/>
           {/* <StudentDashboard/>
         <StudentSubscription/>
           <StudentCourseList/>
           <StudentCourseResume/>
            
           <StudentPaymentInfo/>
           <StudentBookmark/>
           <StudentEditProfile/>
       
          <StudentSetting/>
          <StudentDeleteAccount/> */}

          
      
        <Footer/>

    </Router>
   </>
    
 
  );
}

export default App;
