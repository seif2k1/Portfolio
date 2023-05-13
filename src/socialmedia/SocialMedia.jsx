import {social} from "./social";
import './Socialmedia.css'
import {motion} from "framer-motion"

const Social = ()=>{
    return(
        <motion.div 
        className="Socila-Content"
        id="socialmedia">
            <div className="Social">
                <div className="">
                    <motion.h1
            initial={{x:'-50px',opacity:0}}
            whileInView={{x:'0px',opacity:1}}
            transition={{duration:3,type:"spring",stiffness:50}}
                    >Social Media</motion.h1>
                </div>
                <div className="social-logos">
                    {social.map((socl,index)=>{
                        return(
                            <motion.div 
                            initial={{x:'-50px',opacity:0}}
                            whileInView={{x:'0px',opacity:1}}
                            transition={{duration:3,type:"spring",stiffness:50}}
                            className="Socials" key={index}>
                                <a href={socl.link} className="nav-link">
                                <img src={socl.img} alt={socl.name} />
                                <h1> {socl.name} </h1>
                                </a>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </motion.div>
    )
}
export default Social;