import pic1 from "../images/barbarshop.png";
import pic2 from "../images/Screenshot 2023-05-11 032916.png";
import pic3 from "../images/dachbord.png";
import pic4 from "../images/ecomerce.png";
import pic5 from "../images/pizza-app.png";
import "swiper/css";
import "./mywork.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow } from "swiper";
import { motion } from "framer-motion";

const Mywork = () => {
  return (
    <motion.div
      id="myworks"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3, type: "spring", stiffness: 400 }}
      className="portfolio container"
    >
      <h1 className="working">
        My Recent Work
        <div></div>
      </h1>
      <div
        className="all-content"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "15px",
          gap: "40px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: "-15px", scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 3, type: "spring", stiffness: 400 }}
          className="barberShop"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="barber-image">
            <img
              src={pic1}
              alt="seof"
              style={{
                borderRadius: "35px",
              }}
            />
          </div>
          <div
            className="barber-des"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 15px",
              flexDirection: "column",
            }}
          >
            This is a website is about a Design of a barbarshop online book a
            place for a haircut.
            <br />
            And I i used in this project html and css and javaScript and
            bootstrap and jquery this project is full responsive
            <button>
              <a
                href="https://seif2k1.github.io/barbershop/"
                style={{
                  textDecoration: "none",
                }}
              >
                Live Demo
              </a>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "-15px", scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 3, type: "spring", stiffness: 400 }}
          className="hotel"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="hotel-image">
            <img
              src={pic2}
              alt="seof"
              style={{
                borderRadius: "35px",
              }}
            />
          </div>
          <div
            className="hotel-des"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 15px",
              flexDirection: "column",
            }}
          >
            This is a website is about a Design of booking a hotel in many
            cities
            <br />
            And I i used in this project html and css and javaScript and
            bootstrap and swiper.js then this project is full responsive
            <button>
              <a
                href="https://seif2k1.github.io/newlink/"
                style={{
                  textDecoration: "none",
                }}
              >
                Live Demo
              </a>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "-15px", scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 3, type: "spring", stiffness: 400 }}
          className="dashboard"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="dashboard-image">
            <img
              src={pic3}
              alt="seof"
              style={{
                borderRadius: "35px",
              }}
            />
          </div>
          <div
            className="dashboard-des"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 15px",
              flexDirection: "column",
            }}
          >
            This Website is about Design a dashboard of customers and define how
            much the products that have been sold and main dashboard define the
            average of daily sales and details of customers : name and data and
            status
            <br />
            And I i used in this project html and css and javaScript and library
            of Charts this project is full responsive
            <button>
              <a
                href="https://seif2k1.github.io/Cards/"
                style={{
                  textDecoration: "none",
                }}
              >
                Live Demo
              </a>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "-15px", scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 3, type: "spring", stiffness: 400 }}
          className="shop"
          style={{
            display: "flex",

            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="shop-image">
            <img
              src={pic4}
              alt="seof"
              style={{
                borderRadius: "35px",
              }}
            />
          </div>
          <div
            className="shop-des"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 15px",
              flexDirection: "column",
            }}
          >
            This is a website is about a onlin shope ,add a product to your
            wallet and see the size and total and delet a product or clean your
            wallet .
            <br />
            And I i used in this project html and css and reactjs and fakeapi
            store with redux-toolkit and effect when you add a product use
            react-toast-hot and this project is full responsive
            <button>
              <a
                href="https://seif2k1.github.io/Cart/"
                style={{
                  textDecoration: "none",
                }}
              >
                Live Demo
              </a>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "-15px", scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 3, type: "spring", stiffness: 400 }}
          className="pizza"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="pizza-image">
            <img
              src={pic5}
              alt="seof"
              style={{
                borderRadius: "35px",
              }}
            />
          </div>
          <div
            className="pizza-des"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 15px",
              flexDirection: "column",
            }}
          >
            This is a website is about a Full stuck pizza App Delivery and with
            online payment and cash payment and send the orders and see the
            details of rhe customers order
            <br />
            And I i used in this project html and Tailwind and framwork Next.js
            v13 and redux-toolkit and react-toast-hot and stripe payment online
            and i use the sanity.io for put the products and see the order
            details and this is project is full responsive
            <button>
              <a
                href="https://pizza-app-delivery.vercel.app/"
                style={{
                  textDecoration: "none",
                }}
              >
                Live Demo
              </a>
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default Mywork;
