import React, { useState } from "react";
import "./Header.css";
import { List } from "./List";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import logo from "../images/Designer (1).png";
const Header = () => {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      id="firstSection"
      initial={{ scale: 1.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 3, type: "spring", stiffness: 400 }}
      className="Menu"
    >
      <div className="Main_Title_Menu">
        <h1>
          <Link to="firstSection" spy={true} smooth={true}>
            <img src={logo} alt="logo" width={100} height={100} />
          </Link>
        </h1>
        <div></div>
      </div>
      <div className={`Menu_Content ${open ? "open" : "close"}`}>
        {List.map((list, index) => {
          return (
            <Link to={list.file} duration={3} delay={0}>
              <ul
                key={index}
                className="List"
                onClick={() => {
                  return setActive(index), setOpen(false);
                }}
              >
                <li className={`${active === index ? "active" : ""} `}>
                  {list.name}
                  <div></div>
                </li>
              </ul>
            </Link>
          );
        })}
      </div>
      <div
        className={`${open ? "Humberger-close" : "Humberger"}`}
        onClick={() => setOpen(!open)}
      >
        <div></div>
        <div></div>
        <div></div>
        {console.log(open)}
      </div>
    </motion.div>
  );
};
export default Header;
