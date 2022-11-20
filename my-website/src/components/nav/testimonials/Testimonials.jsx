import React from 'react'
import './testimonials.css'
import AVTR1 from '../../../assets/killerqueen.jpg'
import AVTR2 from '../../../assets/killerqueen.jpg'
import AVTR3 from '../../../assets/killerqueen.jpg'
import AVTR4 from '../../../assets/killerqueen.jpg'

// swip function 
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles 
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: AVTR1,
        name: 'Killer Queen',
        review: 'No.3 Bomb'
    },
    {
        avatar: AVTR2,
        name: 'Rick',
        review: 'go into the space'
    },
    {
        avatar: AVTR3,
        name: 'Big Brother',
        review: 'smoke'
    },
    {
        avatar: AVTR4,
        name: 'Average Joe',
        review: "don't know what's going on"
    },
]

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Reviews</h5>
            <h2>Message</h2>
            
            <Swiper className="container testimonials_container"
            // install Swiper Modules
            modules={[Pagination]} spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
                {
                    data.map(({avatar, name, review}, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt={name} />
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client__review">{review}</small>
                            </SwiperSlide>
                        )
                    })
                
                }
            </Swiper>
        </section>
    )
}


export default Testimonials
