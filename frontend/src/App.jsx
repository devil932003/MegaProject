import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'remixicon/fonts/remixicon.css'
import CaptainHome from './pages/CaptainHome'
import Captainlogin from './pages/Captainlogin'
import CaptainLogout from './pages/CaptainLogout'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import CaptainRiding from './pages/CaptainRiding'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/Home'
import Riding from './pages/Riding'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserLogout from './pages/UserLogout'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserSignup from './pages/UserSignup'

const App = () => {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Start />} />
          <Route path='/login' element={<UserLogin />} />
          <Route path='/riding' element={<Riding />} />
          <Route path='/captain-riding' element={<CaptainRiding />} />

          <Route path='/signup' element={<UserSignup />} />
          <Route path='/captain-login' element={<Captainlogin />} />
          <Route path='/captain-signup' element={<CaptainSignup />} />
          <Route path='/home'
            element={
              <UserProtectWrapper>
                <Home />
              </UserProtectWrapper>
            } />
          <Route path='/user/logout'
            element={<UserProtectWrapper>
              <UserLogout />
            </UserProtectWrapper>
            } />
          <Route path='/captain-home' element={
            <CaptainProtectWrapper>
              <CaptainHome />
            </CaptainProtectWrapper>

          } />
          <Route path='/captain/logout' element={
            <CaptainProtectWrapper>
              <CaptainLogout />
            </CaptainProtectWrapper>
          } />
        </Routes>
      </div>
      <ToastContainer />
    </>
  )
}

export default App