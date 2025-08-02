
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
import TodoDetails from './pages/TodoDetails.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'
import axios from 'axios'

const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

function App() {
 return (
  <>
   <Toaster />
   <Routes>
        <Route 
          path="/" 
          element={
           <PrivateRoute>
             <Home />
           </PrivateRoute>
          } />
        
        <Route  path='/signup' element={<SignUp />}/>
        <Route path='/login' element={<Login />} />

        <Route 
          path="/todo/:id" 
          element={
           <PrivateRoute>
             <TodoDetails />
           </PrivateRoute>
      } />
    </Routes>
  </>
 )
}

export default App
