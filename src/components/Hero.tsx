import { motion } from "framer-motion"
import ComputersCanvas from "./canvas/Computers"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__container__div">
          <div className="hero__container__div__circle"/>
          <div className="hero__container__div__circle__linear"/>
        </div>
        <div>
          <h1 className="hero__container__span__h1"> Hola, Soy <span className="hero__container__span">Cristian</span></h1>
          <p className="hero__container__paragraph">Desarrollador de Aplicaciones Web con AI integrada <br className="hero__container__paragraph__br" /> y Diseñador de Interfaces.</p>
        </div>
      </div>
      <ComputersCanvas/>
      <div className="hero__absolute">
        <a href="#acerca">
          <div className="hero__absolute__div">
            <motion.div
              animate = {{
                y: [0, 24, 0]
              }}
              transition = {{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className = "hero__absolute__div__motion"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero