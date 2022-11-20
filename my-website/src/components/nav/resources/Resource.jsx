import React from 'react'
import './resource.css'
import {BiCheck} from 'react-icons/bi'


const Resource = () => {
    return (
        <section id="resources">
            <h5>interesting</h5>
            <h2>Resource</h2>

            <div className="container resource__container">
                <article className="resource">
                    <div className="resource__head">
                        <h3>Academia</h3>
                    </div>

                    <ul className="resource__list">
                        <li>
                            <BiCheck className="resource__list-icon" />
                            <p>Write something down as place holder elit.</p>
                        </li>
                        <li>
                            <BiCheck className="resource__list-icon" />
                            <p>Write something down as place holder elit.</p>
                        </li>
                        <li>
                            <BiCheck className="resource__list-icon" />
                            <p>Write something down as place holder elit.</p>
                        </li>
                        <li>
                            <BiCheck className="resource__list-icon" />
                            <p>Write something down as place holder elit.</p>
                        </li>
                        <li>
                            <BiCheck className="resource__list-icon" />
                            <p>Write something down as place holder elit.</p>
                        </li>
                    </ul>
                </article>
                {/* End of the first Part */}
                <article className="resource">
                    <div className="resource__head">
                        <h3>Entertainment</h3>
                    </div>

                    <ul className="resource__list">
                        <li>
                            <BiCheck className="resource__list-icon" />
                            <p>Write something down as place holder elit.</p>
                        </li>
                        <li>
                            <BiCheck className="resource__list-icon" />
                            <p>Write something down as place holder elit.</p>
                        </li>
                        <li>
                            <BiCheck className="resource__list-icon" />
                            <p>Write something down as place holder elit.</p>
                        </li>
                        <li>
                            <BiCheck className="resource__list-icon" />
                            <p>Write something down as place holder elit.</p>
                        </li>
                        <li>
                            <BiCheck className="resource__list-icon" />
                            <p>Write something down as place holder elit.</p>
                        </li>
                    </ul>
                </article>
                {/* End of the second Part  */}
                <article className="resource">
                    <div className="resource__head">
                        <h3>New Stuff</h3>
                    </div>

                    <ul className="resource__list">
                        <li>
                            <BiCheck className="resource__list-icon" />
                            <p>Write something down as place holder elit.</p>
                        </li>
                        <li>
                            <BiCheck className="resource__list-icon" />
                            <p>Write something down as place holder elit.</p>
                        </li>
                        <li>
                            <BiCheck className="resource__list-icon" />
                            <p>Write something down as place holder elit.</p>
                        </li>
                        <li>
                            <BiCheck className="resource__list-icon" />
                            <p>Write something down as place holder elit.</p>
                        </li>
                        <li>
                            <BiCheck className="resource__list-icon" />
                            <p>Write something down as place holder elit.</p>
                        </li>
                    </ul>
                </article>
                {/* End of content  */}
            </div>
        </section>
    )
}

export default Resource
