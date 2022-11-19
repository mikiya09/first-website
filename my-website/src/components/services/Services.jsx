import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'


const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>XXXXX</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Write something down as place holder elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Write something down as place holder elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Write something down as place holder elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Write something down as place holder elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Write something down as place holder elit.</p>
                        </li>
                    </ul>
                </article>
                {/* End of the first Part */}
                <article className="service">
                    <div className="service__head">
                        <h3>XXXXX</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Write something down as place holder elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Write something down as place holder elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Write something down as place holder elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Write something down as place holder elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Write something down as place holder elit.</p>
                        </li>
                    </ul>
                </article>
                {/* End of the second Part  */}
                <article className="service">
                    <div className="service__head">
                        <h3>XXXXX</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Write something down as place holder elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Write something down as place holder elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Write something down as place holder elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Write something down as place holder elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Write something down as place holder elit.</p>
                        </li>
                    </ul>
                </article>
                {/* End of content  */}
            </div>
        </section>
    )
}

export default Services
