import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Task from './components/Task'
import Create from './components/Create'
import Update from './components/Update'
import View from './components/View'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Task />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
        <Route path='/view' element={<View />}></Route>
        
      </Routes>
      </BrowserRouter>
        
    </>
  )
}

export default App
