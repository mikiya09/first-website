import React from 'react'
import './nav.css'
import {GoHome} from 'react-icons/go'
import {CiUser} from 'react-icons/ci'
import {BsBook} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'

import {useState} from 'react'

const Nav = () => {

    /* assume useState work on onClick() function, default state is '#' which is used by setState */ 
    /* some idea for activeNav, it's just different variable name, both of them are state */
    const [activeNav, setActiveNav] = useState('#')

    return (
       <nav>
            <a href="#home" onClick={() => setActiveNav('#')} 
                className={activeNav === '#' ? 'active' : ''}><GoHome/></a>
            <a href="#about" onClick={() => setActiveNav('#about')} 
                className={activeNav === '#about' ? 'active' : ''}><CiUser/></a>
            <a href="#experience" onClick={()=> setActiveNav('#experience')} 
                className={activeNav === '#experience' ? 'active' : ''}><BsBook/></a>
            <a href="#services" onClick={()=> setActiveNav('#services')} 
                className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
            <a href="#contact" onClick={()=> setActiveNav('#contact')} 
                className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
       </nav> 
    )
}

export default Nav
