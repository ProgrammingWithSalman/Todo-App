
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
import TodoDetails from './pages/TodoDetails.jsx'


function App() {
 return (
  <>
   <Toaster />
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo/:id" element={<TodoDetails />} />
    </Routes>
  </>
 )
}

export default App
