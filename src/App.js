
import './App.css';
import { Route, Routes } from 'react-router-dom';

import EmpRegister from './components/EmpRegister';
import Home from './components/Home';
import Menu from './components/Menu';
import Login from './components/Login';
import Footer from './components/Footer';
import ManageProfile from './components/ManageProfile';
import ProtectedRoute from './utils/ProtectedRoute';

function App() {
  return (
    
    <div >

     
          <Menu />
         
   
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />

            <Route path='/signup' element={<EmpRegister />} />
            
            <Route  path='/manageprofile'  element={
              <ProtectedRoute>
            <ManageProfile /> 
            </ProtectedRoute>
            }
             />
           
          </Routes>

   
          <Footer  />
          </div>
  );
}

export default App;
