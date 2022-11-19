
import React from 'react'
import './about.css'
import PIC from '../../assets/happyorsad.jpg'
import CV from '../../assets/moanin.pdf'

import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={PIC} alt="About Me" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                    </div>
                    
                    <p>
                        This is me.
                    </p>

                    <a href={CV} download className="btn">Download CV</a>

                </div>
            </div>
        </section>
    )
}

export default About
