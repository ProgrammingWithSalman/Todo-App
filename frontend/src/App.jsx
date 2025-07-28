
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
import EditTodo from './pages/EditTodo.jsx'
function App() {
 return (
  <>
   <Toaster />
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<EditTodo />} />
    </Routes>
  </>
 )
}

export default App
