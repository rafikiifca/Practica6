import {Swiper} from "swiper";
import {Autoplay} from "swiper/modules";
import {Navigation} from "react-router";

const Carousel = () =>{
    <Swiper
        modules={[Navigation, Pagination, Autoplay]}
    >


    </Swiper>;

};

export default Carousel;