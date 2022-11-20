
import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
    return (
        <section id='experience'>
            <h5>Skills</h5>
            <h2>Experience</h2>
    
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Development</h3>
                    <div className="experience__content">
                       <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>C++</h4>
                                <small className='text-light'>moderate</small>    
                            </div>
                         </article> 

                       <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>experienced</small> 
                            </div>
                       </article> 

                       <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Shell</h4>
                                <small className='text-light'>moderate</small>
                            </div>
                       </article> 

                       <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Typing</h4>
                                <small className='text-light'>fast</small>
                            </div>
                       </article> 

                       <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Solidity</h4>
                                <small className='text-light'>Tyro</small>
                            </div>
                       </article> 
                    </div>
                </div>
                {/* END of the First Half the Skill table  */}
                <div className="experience__backend">
                    <h3>Research</h3>
                    <div className="experience__content">
                       <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Deep Learning</h4>
                                <small className='text-light'>nlp/cv</small>
                            </div>
                       </article> 

                       <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Blockchain</h4>
                                <small className='text-light'>ETC</small>
                            </div>
                       </article> 

                       <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>?</h4>
                                <small className='text-light'>---</small>
                            </div>
                       </article> 

                       <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>?</h4>
                                <small className='text-light'>---</small>
                            </div>
                       </article> 

                       <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>?</h4>
                                <small className='text-light'>---</small>
                            </div>
                       </article> 
                    </div>
                </div>
            </div>    
        </section>
    )
}


export default Experience
