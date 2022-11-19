
import React from 'react'
import {Routes, Route} from 'react-router-dom'
// --------------------------------------------

import Nav from './components/nav/Nav.jsx'
import Navbar from './components/navbar/Navbar.jsx'

import Leave from './components/leave/Leave.jsx'

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Nav />} />
                <Route path='/leave' element={<Leave />} />
            </Routes>
        </>
    )
}


export default App
