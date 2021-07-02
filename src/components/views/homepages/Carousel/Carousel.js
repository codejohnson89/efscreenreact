import React from 'react';
import SlideshowFull from '../../custom-modules/slideshowfull/SlideshowFull';
import Footer from '../../global/footer/footer';
import NavigationBar from '../../global/header/nav/NavigationBar';


const Carousel = () => {
    return (
        <div className="seasonal-summer">
            <NavigationBar />
                <SlideshowFull/>
            <Footer/>
        </div>
    )
}


export default Carousel;