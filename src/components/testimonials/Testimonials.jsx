import React from 'react'
import './testimonials.min.css'
import AVA1 from '../../assets/img/avatars/ava1.png'
import AVA2 from '../../assets/img/avatars/ava2.png'
import AVA3 from '../../assets/img/avatars/ava4.png'
import AVA4 from '../../assets/img/avatars/ava6.png'
// Swiper
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
    {
        id : 1,
        avatar : AVA1,
        name : 'Antwan',
        review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rem optio aliquid? Nobis rerum omnis recusandae atque amet debitis vitae dicta, repudiandae laudantium necessitatibus voluptates vel? Doloremque, dignissimos? Voluptates nulla nisi.'
    },
    {
        id : 2,
        avatar : AVA2,
        name : 'Dude',
        review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rem optio aliquid? Nobis rerum omnis recusandae atque amet debitis vitae dicta, repudiandae laudantium necessitatibus voluptates vel? Doloremque, dignissimos? Voluptates nulla nisi id dolorem eius quae obcaecati dicta explicabo quas tempora esse officia iste nam aliquam, hic perspiciatis laboriosam unde quam!'
    },
    {
        id : 3,
        avatar : AVA3,
        name : 'Molotov Girl',
        review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rem optio aliquid? Nobis rerum omnis recusandae atque amet debitis vitae dicta.'
    },
    {
        id : 4,
        avatar : AVA4,
        name : 'Keys',
        review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rem optio aliquid? Nobis rerum omnis recusandae atque amet debitis vitae dicta, repudiandae laudantium necessitatibus voluptates vel?'
    }
]

export const Testimonials = () => {
  return (
    <section id="testimonials">
        <h5>Review From Clients</h5>
        <h2>Testimonials</h2>

        <div className="container testimonials__container">
            <Swiper
                className="mySwiper"
                modules={[Pagination]}
                rewind={true}
                centeredSlides={true}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{
                    dynamicBullets: true,
                }}
            >

                {
                    data.map(({id, avatar, name, review}) =>{
                        return (
                            <SwiperSlide  key={id} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt="Avatar" />
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client__review">
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Testimonials