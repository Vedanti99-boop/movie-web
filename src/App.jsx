
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Component/Home'
import SingleMovie from './Component/SingleMovie'
import Error from './Component/Error'

function App() {

  return (
    <>
      <div>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='movie/:id' element={<SingleMovie/>}/>
        <Route path='*' element={<Error/>}/>

       </Routes>
       </BrowserRouter>
      </div>
      
    </>
  )
}

export default App
