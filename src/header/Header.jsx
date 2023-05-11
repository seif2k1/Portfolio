import React,{useState} from "react"
import "./Header.css"
import { List } from "./List";
import {motion} from "framer-motion"
import {Link} from 'react-scroll'
const Header = () => {
    const [active,setActive] = useState(0);
    const [open,setOpen] = useState(false);
    /* const width = document.innerWidth <= '768px' ? true : false; */
    return(
        <motion.div
        id="firstSection"
        initial={{scale:1.2,opacity:0}}
        whileInView={{scale:1,opacity:1}}
        transition={{duration:3,type:"spring",stiffness:400}}
        className="Menu">
            <div className="Main_Title_Menu">
                <h1>
                    <Link
                    to="firstSection"
                    spy={true}
                    smooth={true}
                    >
                    Portfolio
                    </Link>
                </h1>
                <div></div>
            </div>
            <div className={`Menu_Content ${open ? "open":"close"}`}>
                    {List.map((list,index)=>{
                        return(
                        <ul key={index} className="List" onClick={()=> setActive(index)}>
                            <li 
                            className={`${active===index ? 'active':''}`} >
                                <Link
                                to={list.file}
                                spy={true}
                                smooth={true}
                                >
                                {list.name}
                                </Link>
                            <div className={`${active===index ? 'active':''}`}></div>
                            </li>
                        </ul>
                        )
                    })}
            </div>
            <div className={`${open?'Humberger-close':'Humberger'}`} onClick={()=> setOpen(!open)}>
                <div></div>
                <div></div>
                <div></div>
                {console.log(open)}
            </div>
        </motion.div>
    )
}
export default Header;