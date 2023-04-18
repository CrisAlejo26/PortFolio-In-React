import { motion } from "framer-motion"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"
import { testimonials } from "../constants"

interface Feed {
  index: any,
  testimonial: string,
  name: string,
  designation: string,
  company: string,
  image: any
}

const FeedbackCard = ({index, testimonial, name, designation, company, image}: Feed) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="feedbackCard"
  >
    <p className="feedbackCard__p">"</p>
    <div className="feedbackCard__div">
      <p className="feedbackCard__div__p">{testimonial}</p>
      <div className="feedbackCard__div__div">
        <div className="feedbackCard__div__div__div">
          <p className="feedbackCard__div__div__div__p"><span className="feedbackCard__div__div__div__p__span">@</span>{name}</p>
          <p className="feedbackCard__div__div__div__p2">{designation} de {company}</p>
        </div>
        <img className="feedbackCard__div__div__img" src={image} alt={name} />
      </div>
    </div>
  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className="feedbacks">
      <div className="feedbacks__div">
        <motion.div variants={textVariant(.7)}>
          <p className="feedbacks__div__p">Lo que otros dicen</p>
          <h2 className="feedbacks__div__h2">Testimonios.</h2>
        </motion.div>
      </div>
      <div className="feedbacks__container">
        {testimonials.map((testimonial: any, index: any) => (
          <FeedbackCard key={testimonial.name} {...testimonial} index={index}/>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "")