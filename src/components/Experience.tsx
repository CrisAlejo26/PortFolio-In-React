import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import { motion } from 'framer-motion';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

interface exp {
  icon: string,
  company_name: string,
  date?: string,
  iconBg: string,
  title: string,
  points: string[],
}

const ExperienceCard = ({experience}: {experience: exp}) => (
  <VerticalTimelineElement
    contentStyle = {{background: '#1d1836', color: '#fff'}}
    contentArrowStyle={{ borderRight: '7px solid #232631'}}
    date={experience.date}
    iconStyle={{background: experience.iconBg}}
    icon={
      <div className='experienceCard__img'>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="experienceCard"
        />
      </div>
    }
  >
    <div>
      <h3 className='experienceCard__div'>{experience.title}</h3>
      <p style={{margin: '0'}} className='experienceCard__div__p'>{experience.company_name}</p>
    </div>

    <ul className='experienceCard__ul'>
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className='experienceCard__li'
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant(.5)}
      >
        <p className="aboutSubText">Lo que he hecho hasta ahora</p>
        <h2 className="aboutHeadText">Experiencia Laboral.</h2>
      </motion.div>

      <div className='experience'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience = {experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "trabajo")