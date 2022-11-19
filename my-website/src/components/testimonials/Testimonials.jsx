import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/killerqueen.jpg'
import AVTR2 from '../../assets/killerqueen.jpg'
import AVTR3 from '../../assets/killerqueen.jpg'
import AVTR4 from '../../assets/killerqueen.jpg'

// swip function 
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles 
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: AVTR1,
        name: 'xxxx',
        review: 'xxxxxxxxxxxxxxxxxxxxa;sdlkfja;sdlkfja;sdlkfja;lsdkfj;asdlkjfxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    },
    {
        avatar: AVTR2,
        name: 'xxxx',
        review: 'xxxxxxxxxxxxxxxxxxxxa;sdlkfja;sdlkfja;sdlkfja;lsdkfj;asdlkjfxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    },
    {
        avatar: AVTR3,
        name: 'xxxx',
        review: 'xxxxxxxxxxxxxxxxxxxxa;sdlkfja;sdlkfja;sdlkfja;lsdkfj;asdlkjfxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    },
    {
        avatar: AVTR4,
        name: 'xxxx',
        review: 'xxxxxxxxxxxxxxxxxxxxa;sdlkfja;sdlkfja;sdlkfja;lsdkfj;asdlkjfxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    },
]

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review From Clients</h5>
            <h2>Testimonials</h2>
            
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
