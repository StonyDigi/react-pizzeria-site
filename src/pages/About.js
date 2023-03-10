import React from 'react'
import {motion} from 'framer-motion'
import AboutImage from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'
const About = () => {
  return (
    <motion.div
    className='about'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.3}}
    
    >
        <div className='aboutTop' style={{backgroundImage: `url( ${AboutImage} )`}}></div>
        <div className="aboutContainer">
            <h2>Rólunk</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis dicta reiciendis rerum explicabo ab provident molestias magni nihil. Nihil labore dolores iure velit ipsam fugiat cupiditate quas magnam a ab placeat hic nesciunt explicabo delectus modi asperiores dolorum, eos voluptate minima similique provident. Iste dicta mollitia maxime deleniti laudantium fugit. Nisi delectus quod ipsa sed inventore non voluptates quidem, impedit, magni maxime odio obcaecati odit, minima veniam voluptatem dolor. Minima blanditiis ea tenetur similique quam cumque, placeat corporis necessitatibus tempora voluptas facere ad inventore error nobis, non consequatur incidunt obcaecati accusamus repellendus, omnis molestiae voluptate. Quibusdam architecto consequuntur temporibus possimus repudiandae at voluptas iste incidunt eveniet animi ducimus sit est quo quisquam dolorum saepe nostrum natus doloribus, eius ipsa pariatur, voluptates ipsam nam sed? Placeat temporibus veniam deleniti cupiditate, consectetur ratione doloremque eius rem non impedit maiores, odit iste in mollitia ducimus possimus quis quasi provident nostrum quos nobis est.</p>
        </div>

    </motion.div>
  )
}

export default About