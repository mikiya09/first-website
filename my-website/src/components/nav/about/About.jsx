
import React from 'react'
import './about.css'
import PIC from '../../../assets/happyorsad.jpg'
import CV from '../../../assets/moanin.pdf'


import {IoIosGitNetwork} from 'react-icons/io'
import {BiBrain} from 'react-icons/bi'
import {TbMathFunction} from 'react-icons/tb'


const About = () => {
    return (
        <section id='about'>
            <h5>Brief</h5>
            <h2>About</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={PIC} alt="About Me" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <IoIosGitNetwork className="about__icon"/>
                            <h5>ComSci</h5>
                            <small>deep learning</small>
                        </article>

                        <article className="about__card">
                            <BiBrain className="about__icon"/>
                            <h5>Psychology</h5>
                            <small>memory</small>
                        </article>

                        <article className="about__card">
                            <TbMathFunction className="about__icon"/>
                            <h5>Mathematics</h5>
                            <small>just enough</small>
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
