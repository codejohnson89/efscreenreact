import React from 'react';
import { Container, Row } from 'react-bootstrap';
import corgi from '../../../../images/slideshows/corgi.jpg';
import fall from '../../../../images/slideshows/fall.jpg';
import flower from '../../../../images/slideshows/flower.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper'

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation, Autoplay])

function SlideshowFull() {

    return (
        <>
        <Container>
            <Row>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    loop
                    autoplay
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>
                    <SwiperSlide><img className="d-block w-100" src={corgi} alt="First slide"/></SwiperSlide>
                    <SwiperSlide><img className="d-block w-100" src={fall} alt="First slide"/></SwiperSlide>
                    <SwiperSlide><img className="d-block w-100" src={flower} alt="First slide"/></SwiperSlide>
                </Swiper>
            </Row>
        </Container>
        </>
    )
}

export default SlideshowFull;