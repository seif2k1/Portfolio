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
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow } from "swiper";
import {motion} from "framer-motion"

const Mywork = ()=>{
    return(
        <motion.div 
        id="myworks"
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:3,type:"spring",stiffness:400}}
        className="portfolio">
      <Swiper
      
      breakpoints={{
        640: {
          slidesPerView:1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },}}
        autoplay={true}
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
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