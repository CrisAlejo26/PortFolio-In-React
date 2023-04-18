import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import BallCanvas from "./canvas/Ball"




const Tech = () => {
  return (
    <div className="tech">
      {technologies.map((technology) => (
        <div className="tech__technology"
          key={technology.name}
        >
          <BallCanvas icon = {technology.icon}/>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")