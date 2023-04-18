import { motion } from "framer-motion"
import { staggerContainer } from "../utils/motion"

type JSXComponent = () => JSX.Element

// interface params {
//     Component: JSXComponent,
//     idName: String
// }

export const SectionWrapper= (Component: JSXComponent, idName: string) => 
function HOC() {
    return (
        <motion.section
            variants={staggerContainer(.5, .4)}
            initial= "hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.25}}
            className="sectionWrapper"
        >
            <span className="sectionWrapper__span" id={idName}>
                &nbsp;
            </span>
            <Component />
        </motion.section>
    )
}