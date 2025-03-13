import {Swiper} from "swiper";
import {Navigation} from "react-router-dom";
import {Autoplay} from "swiper/modules";
import {Pagination} from "@mui/material";
import {SwiperSlide} from "swiper/react";

const Carousel = () =>{
    <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetwen={50}
        slidePerviev={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delaye: 3000 }}
    >
        <SwiperSlide>
            <img src="dispositiva1.jpg" alt="Slide 1" className="slide"/>
        </SwiperSlide>

    </Swiper>;

};

export default Carousel;