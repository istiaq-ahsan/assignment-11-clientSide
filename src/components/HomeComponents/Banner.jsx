import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'


import bgimg1 from '../../assets/images/carousel1.jpg'
import bgimg2 from '../../assets/images/carousel2.jpg'
import bgimg3 from '../../assets/images/carousel3.jpg'
import Slide from './Slide'


const Banner = () => {
    return (
        <div className=' mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'
            >
                <SwiperSlide>
                    <Slide
                        image={bgimg1}
                        text='Experience the thrill of running in a community of fitness enthusiasts. Sign up now to secure your spot in our upcoming marathons.'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={bgimg2}
                        text='Be part of a movement that matters. Participate in events that give back to the community and inspire positive change'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={bgimg3}
                        text='Push your boundaries and achieve new milestones. Let your footsteps echo determination and resilience.'
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Banner;