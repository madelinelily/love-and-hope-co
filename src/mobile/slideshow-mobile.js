/* eslint-disable jsx-a11y/img-redundant-alt */
import { Splide, SplideSlide } from '@splidejs/react-splide';
import slide1 from '../slideshow/1.jpg';
import slide2 from '../slideshow/2.jpg';
import slide3 from '../slideshow/3.jpg';
import slide4 from '../slideshow/4.jpg';
import slide5 from '../slideshow/5.jpg';
import slide6 from '../slideshow/6.jpg';

//TODO: NEED NEW IMAGES

const images = [slide1, slide2, slide3, slide4, slide5, slide6]

const SlideshowMobile = () => {
    return(
        <Splide aria-label="Photos" className="slide-container">
            {images.map((image, index) => 
                <SplideSlide key={index} className="slide">
                    <img src={image} alt={`Image ${index}`} className="slide-image"/>
                </SplideSlide>
            )}
        </Splide>
    )
}

export default SlideshowMobile;