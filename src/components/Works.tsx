import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import {projects} from '../constants'
import { fadeIn, textVariant } from "../utils/motion"

interface Card {
  index: any,
  name: string,
  description: string,
  tags: any,
  image: string,
  source_code_link: string
}

const ProjectCard = ({index, name, description, tags, image, source_code_link}: Card) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options = {{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="projectCard"
      >
        <div className="projectCard__div">
          <img src={image} alt={name} className="projectCard__div__img"/>
          <div className="projectCard__div__div">
            <div onClick={() => window.open(source_code_link, "_blank")} className="projectCard__div__div__onclick">
              <img src={github} alt="github" className="projectCard__div__div__onclick__img" />
            </div>
          </div>
        </div>
        <div className="projectCard__div__work">
          <h3 className="projectCard__div__work__name">{name}</h3>
          <p className="projectCard__div__work__description">{description}</p>
        </div>
        <div className="projectCard__div__work__tag">
          {tags.map((tag: any) => (
            <p key={tag.name} className="projectCard__div__work__tag__p">#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}


const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant(.5)}
      >
        <p className="aboutSubText">Mi Trabajo</p>
        <h2 className="aboutHeadText">Proyectos.</h2>
      </motion.div>

      <div className="works">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="works__motion"
        >
          Los siguientes proyectos muestran mis habilidades y experiencia a través ejemplos del mundo real de mi trabajo. Cada proyecto describe brevemente sus tecnologias usadas y manejo de cada una de ellas. refleja mi
capacidad para resolver problemas complejos, trabajar con diferentes tecnologías, y gestionar proyectos con eficacia.
        </motion.p>
      </div>
      <div className="works__cards">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            {...project}
            index = {index}
            />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "works")