import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './NotFound'
import LandingPage from './LandingPage'
import JobList from './JobList'
import Layout from './Layout'
import Dashboard from './Dashboard'
import JobDetails from './JobDetails'
import Pricing from './Pricing'
import About from './About'
import Login from './Login'

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/app" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route  path="jobs" element={<JobList />} >
                <Route path=":jobId" element={<JobDetails />} />
           
            </Route>
          </Route>
            <Route path="pricing" element={<Pricing />}/>
            <Route path="about" element={<About />}/>
          <Route path="*" element={<NotFound />} />
          <Route path="login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default AppRoutes
