import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/home/home';
// import Admin from './Components/admin/Admin';
import Aboutus from './Components/Contact us/contactus';
import Login from './Components/Login/login';
import Register from './Components/Register/register';
import Page from './Components/page/page';
import AdminRegister from './Components/adminRegister/AdminRegister';
import AdminLogin from './Components/adminLogin/adminLogin';
import UserDashboard from './Components/userDashboard/UserDashboard';

function App() {
 

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Page/>} />
          <Route path='/home' element={<Home/>} />
          {/* <Route path='/Admin' element={<Admin/>} /> */}
          <Route path='/aboutus' element={<Aboutus/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/adminRegister' element={<AdminRegister/>} />
          <Route path='/adminLogin' element={<AdminLogin/>} />
          <Route path='/userDashboard' element={<UserDashboard/>} />
          
        </Routes>
    </BrowserRouter>
  )
}

export default App
