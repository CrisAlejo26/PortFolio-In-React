import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"

type Opt = {
  max: any
  scale: any
  speed: any
}

const ServiceCard = ({index, title, icon}: {title: string, index: number, icon: string}) => {
  return (
    <Tilt className="serviceCard" options= {{
      max: 45,
      scale: 1,
      speed: 450
    }}>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="serviceCard__motion"
      >
        <div
          className="serviceCard__motion__div"
        >
          <img src={icon} alt={title} className="serviceCard__motion__div__img"/>
          <h3 className="serviceCard__motion__div__title">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(.5)}>
        <p className="aboutSubText">Introduccion</p>
        <h2 className="aboutHeadText">Descripción.</h2>
      </motion.div>
      <motion.p className="aboutHead" variants={fadeIn("", "", 0.1, 1)}>
      Soy un desarrollador web con más de 1 año de experiencia en el uso de JavaScript, TypeScript, React, Sass, CSS, Redux, Hooks, Bootstrap, Material UI, Git y GitHub. Me apasiona crear aplicaciones web dinámicas, responsivas y accesibles que cumplan con los estándares de calidad y las necesidades de los usuarios. Tengo habilidades para trabajar en equipo, resolver problemas y aprender nuevas tecnologías.
      </motion.p>
      <div className="aboutServices">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index = {index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "acerca")