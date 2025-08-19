import { BrowserRouter ,Routes , Route} from 'react-router-dom'
import './App.css'

import Home from './Pages/Home'
import Login from './Pages/Login'
import CreateAccount from './Pages/CreateAccount'
import Setting from './Pages/Setting'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<CreateAccount/>}/>
          <Route path='/setting' element={<Setting/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
