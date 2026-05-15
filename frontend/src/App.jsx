import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './pages/PrivateRoute'



import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Notifaction from './pages/Notifaction'
import Profile from './pages/Profile'
import Deposit from './pages/Deposit'
import Withdrawal from './pages/Withdrawal'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Progress from './pages/Progress'
import Plan from './pages/Plan'
import Menu from './pages/Menu'
import DepositsRecords from './pages/DepositsRecords'
import BindAccount from './pages/BindAccount'

const App = () => {


  return (
    <div className='px-[3%] bg-white sm:px-[5vw] md:px-[7vw] lg:px[9vw]'>
      <Navbar />
      <Routes>
        <Route path='/user/register' element={<Register />} />
        <Route path='/user/login' element={<Login />} />
        <Route path='/'
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />
        <Route path='/deposit'
          element={
            <PrivateRoute>
              <Deposit />
            </PrivateRoute>
          } />
        <Route path='/notifaction'
          element={
            <PrivateRoute>
              <Notifaction />
            </PrivateRoute>
          } />
        <Route path='/profile'
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } />
        <Route path='/withdrawal'
          element={
            <PrivateRoute>
              <Withdrawal />
            </PrivateRoute>
          } />
        <Route path='/progress'
          element={
            <PrivateRoute>
              <Progress />
            </PrivateRoute>
          } />
        <Route path='/invest'
          element={
            <PrivateRoute>
              <Plan />
            </PrivateRoute>
          } />
        <Route path='/menu'
          element={
            <PrivateRoute>
              <Menu />
            </PrivateRoute>
          } />

          <Route path='/deposits-records'
          element={
            <PrivateRoute>
              <DepositsRecords />
            </PrivateRoute>
          } />

          <Route path='/bind-account'
          element={
            <PrivateRoute>
              <BindAccount />
            </PrivateRoute>
          } />

      </Routes>
      <Footer />
    </div>
  )
}

export default App


