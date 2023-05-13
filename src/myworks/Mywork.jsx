import pic1 from "../images/barbarshop.png";
import pic2 from "../images/Screenshot 2023-05-11 032916.png";
import pic3 from "../images/dachbord.png";
import pic4 from "../images/ecomerce.png";
import 'swiper/css'
import "./mywork.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { Autoplay} from "swiper";


// import required modules
import { EffectCards } from "swiper";
import {motion} from "framer-motion"

const Mywork = ()=>{
    return(
        <motion.div 
        id="myworks"/* 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:3,type:"spring",stiffness:400}} */
        className="portfolio">
            <Swiper
            loop={true}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards,Autoplay]}
            className="mySwiper"
            >
                <SwiperSlide>
                    <a href="https://seif2k1.github.io/barbershop/">
                    <img src={pic1} alt="seof"/>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://seif2k1.github.io/newlink/">
                    <img src={pic2} alt="seof"/>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://seif2k1.github.io/Cards/">
                    <img src={pic3} alt="seof"/>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://seif2k1.github.io/Cart/">
                    <img src={pic4} alt="seof"/>
                    </a>
                </SwiperSlide>
            </Swiper>
        </motion.div>
    )
}
export default Mywork;