import img1 from "../images/Group 220.png";
import img2 from "../images/Group 219.png";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Footer.css";
import { motion } from "framer-motion";
const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ziza307",
        "template_ulaierj",
        form.current,
        "hS-QmjHihuuqdJDA9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="footer my-md-5" id="footer">
      <motion.div
        initial={{ x: "-50px", opacity: 0 }}
        whileInView={{ x: "0px", opacity: 1 }}
        transition={{ duration: 3, type: "spring", stiffness: 400 }}
        className="myinfo p-5"
      >
        <div className="info-text">
          <h1>Get in touch with us!</h1>
          <p>
            Whether you want to learn about UX/UI or need developer services let
            us help with your challenge.
          </p>
        </div>
        <div className="social-info">
          <div>
            <img src={img1} alt="email" />
            <h1>Seif22k@gmail.com</h1>
          </div>
          <div>
            <img src={img2} alt="phone" />
            <h1>+213792304791</h1>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: "-50px", opacity: 0 }}
        whileInView={{ x: "0px", opacity: 1 }}
        transition={{ duration: 3, type: "spring", stiffness: 400 }}
        className="contact "
      >
        <form
          className="row g-3 needs-validation"
          novalidate
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="col-md-5">
            <input
              type="text"
              name="user_name"
              className="form-control"
              id="validationCustom01"
              placeholder="First name"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-5">
            <input
              type="text"
              name="user_name"
              className="form-control"
              placeholder="Last name"
              id="validationCustom02"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-9">
            <div className="input-group has-validation">
              <input
                type="email"
                name="user_email"
                className="form-control"
                placeholder="Email"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              />
              <div className="invalid-feedback">Please choose a username.</div>
            </div>
          </div>
          <div className="col-md-5">
            <input
              type="text"
              name="message"
              className="form-control"
              placeholder="Subject"
              id="validationCustom03"
              required
            />
            <div className="invalid-feedback">Please provide a valid city.</div>
          </div>
          <div className="col-md-10">
            <input
              type="text"
              name="message"
              className="form-control"
              id="validationCustom01"
              placeholder="Message"
              required
            />
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Please select a valid state.</div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
export default Footer;
