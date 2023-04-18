import { useState } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'
import { EarthCanvas } from "."
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"
import { SubmitHandler, useForm } from "react-hook-form"
import { Alert } from "@mui/material"

type Inputs = {
  name: string,
  email: string,
  message: string
};

const Contact = () => {

  const [loading, setLoading] = useState(false);
  const {register, handleSubmit, watch, formState: { errors }, reset} = useForm<Inputs>()
  
  
  const onSubmit: SubmitHandler<Inputs> = (data, e) => {
    setLoading(true);
    
    emailjs.send("service_i6g83u7", "template_xds0ukn", {
      from_name: data.name,
      to_name: "Cristian Alejandro",
      from_email: data.email,
      to_email: "cristianalejo84@gmail.com",
      message: data.message,
      },
      "TrDNLDlAMqqIf9BjU"
      )
      .then(() => {
        setLoading(false);
        alert("Muchas gracias. Me pondré en contacto contigo lo más pronto posible, gracias por creer en mi trabajo")
        e?.target.reset()
      }, (error: any) => {
        setLoading(false)
        e?.target.reset()
        console.log(error);
        alert("Se han enviado demasiadas peticiones, lo siento.")})
    }

  return (
    <div className="contact">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="contact__motion"
      >
        <p className="feedbacks__div__p">Póngase en Contacto</p>
        <h3 className="feedbacks__div__h2">Contácto.</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="contact__motion__form"
        >
          <label className="contact__motion__form__label" htmlFor="">
            <span className="contact__motion__form__label__span">Tu Nombre</span>
            {/* 
            // ! esto es una forma de hacerlo sin el aria-invalid
            {errors.name && <Alert severity="error">¡Este campo es obligatorio!</Alert>} */}
            <input 
              type="text" 
              aria-invalid = {errors.name ? "true" : "false"}
              {...register("name", {required: true, maxLength: 80, minLength: 3})}
              placeholder="¿Cúal es tu nombre?"
              className="contact__motion__form__label__input"
            />
            {errors.name && errors.name.type === "required" && <Alert severity="error">¡Este campo es obligatorio!</Alert>}
            {errors.name && errors.name.type === "maxLength" && <Alert severity="error">No puede ser mayor a 80 caracteres</Alert>}
            {errors.name && errors.name.type === "minLength" && <Alert severity="error">No puede ser menor a 3 caracteres</Alert>}
          </label>
          <label className="contact__motion__form__label">
            <span className="contact__motion__form__label__span">Tu Correo</span>
            {errors.email && <Alert severity="error">¡Este campo es obligatorio!</Alert>}
            <input 
              type="email" 
              {...register("email", {required: true, pattern: /^\S+@\S+$/i})}
              placeholder="¿Cúal es tu correo?"
              className="contact__motion__form__label__input"
            />
          </label>
          <label className="contact__motion__form__label" htmlFor="">
            <span className="contact__motion__form__label__span">Tu Mensaje</span>
            {errors.message && <Alert severity="error">¡Este campo es obligatorio!</Alert>}
            <textarea
              rows = {7}
              {...register("message", {required: true})}
              placeholder="¿Cúal es tu mensaje?"
              className="contact__motion__form__label__input"
            />
          </label>

          <button
            type="submit"
            className="contact__motion__form__button"
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="contact__motion__motion"
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contacto")