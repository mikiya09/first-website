import React from 'react'
import './portfolio.css'

import IMG1 from '../../../assets/cloud.png'
import IMG2 from '../../../assets/cloud.png'
import IMG3 from '../../../assets/cloud.png'
import IMG4 from '../../../assets/cloud.png'
import IMG5 from '../../../assets/cloud.png'
import IMG6 from '../../../assets/cloud.png'


/* dynamically render repeative object, portfolio item below, by using array and mapping */

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'xxxxxxxx',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 1,
        image: IMG2,
        title: 'xxxxxxxx',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 1,
        image: IMG3,
        title: 'xxxxxxxx',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 1,
        image: IMG4,
        title: 'xxxxxxxx',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 1,
        image: IMG5,
        title: 'xxxxxxxx',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 1,
        image: IMG6,
        title: 'xxxxxxxx',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
]

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo}) => {
                    return (
                        /* each article object should have a unique id for identifying */
                        <article key={id} className='portfolio__item'>
                            <div className="portfolio__item-image">
                                <img src={image} alt="" />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
                                <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
                            </div>
                        </article>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Portfolio
