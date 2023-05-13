import React from 'react'
import img from "../images/Group.png";
import './Skills.css';
import { Bonus, Framworks, ListSkill } from './ListSkill';
import {motion} from "framer-motion";

const Skills = () => {
  return (
    <div className='skills' id="skills">
        <motion.div
        className='group-logo'>
            <img src={img} alt="img" />
        </motion.div>
        <motion.div 
        className='skills-descreption'>
            <motion.h1 
            initial={{x:'-50px',opacity:0}}
            whileInView={{x:'0px',opacity:1}}
            transition={{duration:3,type:"spring",stiffness:50}}
            className="My-Skills">
                My Skills
                <div className=''></div>
            </motion.h1>
            {ListSkill.map((skill,index)=>{
                return(
                    <div className="skills-details" key={index}>
                        <motion.h1 
                            initial={{x:'-50px',opacity:0}}
                            whileInView={{x:'0px',opacity:1}}
                            transition={{duration:3,type:"spring",stiffness:50}}
                        > {skill.name} </motion.h1> 
                        <motion.div 
                            initial={{x:'-50px',opacity:0}}
                            whileInView={{x:'0px',opacity:1}}
                            transition={{duration:3,type:"spring",stiffness:50}}
                        className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar progress-bar-striped progress-bar-animated " style={{width: skill.value}}>{skill.value}</div>
                        </motion.div>
                    </div>
                )
            })}
            <motion.h1 
            initial={{x:'-50px',opacity:0}}
            whileInView={{x:'0px',opacity:1}}
            transition={{duration:3,type:"spring",stiffness:50}}
            className="Framworks">
                Framworks
                <div className=''></div>
            </motion.h1>
                <div className='skills-framworks'>
                    {Framworks.map((fram,index)=>{
                        return(
                            <div className='framworks' key={index}>
                                <motion.h1
                            initial={{x:'-50px',opacity:0}}
                            whileInView={{x:'0px',opacity:1}}
                            transition={{duration:3,type:"spring",stiffness:50}}
                                > {fram.name} </motion.h1> 
                            </div>
                        )
                    })}
                </div>
            <motion.h1 
            initial={{x:'-50px',opacity:0}}
            whileInView={{x:'0px',opacity:1}}
            transition={{duration:3,type:"spring",stiffness:50}}
            className="Bonus">
                Bonus
                <div className=''></div>
            </motion.h1>
                <div className='skills-bonnus'>
                    {Bonus.map((bonus,index)=>{
                        return(
                            <div className='framworks' key={index}>
                                <motion.h1
                            initial={{x:'-50px',opacity:0}}
                            whileInView={{x:'0px',opacity:1}}
                            transition={{duration:3,type:"spring",stiffness:50}}
                                > {bonus.name} </motion.h1> 
                            </div>
                        )
                    })}
                </div>
        </motion.div>
</div>
  )
}

export default Skills