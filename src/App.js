import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CourseCategory from './Components/CourseCategory';

import Nav from './Components/Nav';
import Home from './Components/Home';
import CourseList from './Components/CourseList';


function App() {
  return (
    <>

    <BrowserRouter>
       <Nav/>
        {/* <Nav1/> */}
          <Routes>
              <Route path='/' element={ <Home/> }/>
              <Route path='/coursecategory' element={<CourseCategory/>}/>
              <Route path='/login' element={<Login/>} />
              <Route path='/signup' element={<SignUp/>} />
          </Routes>
        
    </BrowserRouter>
   </>
    
 
  );
}

export default App;
