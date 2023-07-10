import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../images/001.jpg";
import img2 from "../../images/002.jpg";
import img3 from "../../images/003.jpg";
import './Carousel.css';

const Carousel = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 50,
        // centerMode: true,
        // centerPadding: "5px",
        cssEase: "linear",
        // variableWidth: true
    };

    return (
        <div className="carousel-wrapper">
            <Slider {...settings} className="slider-slick-js">
                <div>
                    <img src={img1} alt="Slide 1" />
                </div>
                <div>
                    <img src={img2} alt="Slide 2" />
                </div>
                <div>
                    <img src={img3} alt="Slide 3" />
                </div>
            </Slider>
        </div>
    );
}
export default Carousel;