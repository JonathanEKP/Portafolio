import React from "react";
import './Contact.css'



function Contact() {
  return (
    <div className="sec4 seccion contact " id="contact">
      <div>
          <div className="mt-4 mt-lg-0">
            <h1 className="text-danger h1 text-center display-6">Contactame</h1>
            <p className="text-center p-3 text-white">
              Rellena el siguiente formulario si quieres ponerte en contacto
              conmigo :D
            </p>
          </div>
        
        <div className="d-flex justify-content-center align-items-center text-white">
          <form
            action="https://formsubmit.co/jonathanvaldez2001@gmail.com"
            method="POST"
          >
            <label htmlFor="emailPersona" className="form-label mb-2">
              Email 
            </label>
            <input
              type="email"
              name="email"
              className="form-control mb-2"
              id="emailPersona"
              aria-describedby="emailHelp"
              required
            />

            <label htmlFor="subject" className="form-label mb-2">
              Asunto
            </label>
            <input
              type="text"
              name="subject"
              className="form-control mb-2"
              id="subject"
              required
            />

            <label htmlFor="comentarios" className="form-label mb-2">
              Comentarios
            </label>
            <textarea
              name="comentarios"
              cols="15"
              rows="5"
              className="form-control mb-3"
              required
            ></textarea>

            <input type="submit" className="btn btn-outline-danger" />

            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://jonathanekp.github.io/Portafolio/thanks"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
