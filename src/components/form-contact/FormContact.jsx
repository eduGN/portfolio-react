import React from 'react';
import emailjs, { init } from 'emailjs-com';
import './FormContact.css';
import Button from '../button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarker, faPaperPlane, faPhone, faSign, faUser, faComment } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

function FormContact() {

    const sendEmail = (e) => {

        const template = process.env.REACT_APP_EMAIL_TEMPLATE
        const user_id = process.env.REACT_APP_EMAIL_USER_ID
        const service_id = process.env.REACT_APP_EMAIL_SERVICE_ID

        console.log({service:service_id,template_:template,
        id:user_id})

        e.preventDefault();
        init(user_id)
        emailjs.sendForm(service_id, template, e.target, user_id)
          .then((result) => {
              if(result.text === "OK"){
                Swal.fire(
                    '¡Enviado!',
                    'Tu mensaje se ha enviado correctamente',
                    'success'
                  )
              }
          }, (error) => {
              console.log(error)
            Swal.fire(
                '¡Oh no!',
                'Algo salió mal. Inténtalo de nuevo',
                'error'
              )
          });
       e.target.reset()
    }
    return (
        <div className="formcontact-container">
            <div className="contact-container">
                <div className="contact-info-container">
                    <FontAwesomeIcon icon={faPhone} className="icon-contact" />
                    <div className="contact-data">
                        <span>Teléfono</span>
                        <span>+34 677 892 453</span>
                    </div>
                </div>
                <div className="contact-info-container">
                     <FontAwesomeIcon icon={faEnvelope} className="icon-contact" /> 
                     <div className="contact-data">
                      <span>Email</span>  
                      <span style={{fontSize: '0.8rem'}}>edu.gutierrez.navarro@gmail.com</span> 
                    </div>
                </div>
                <div className="contact-info-container">
                     <FontAwesomeIcon icon={faMapMarker} className="icon-contact" />
                     <div className="contact-data">
                        <span>&nbsp;Ubicación</span>
                        <span>&nbsp;Madrid - España</span>
                    </div>
                </div>
            </div> 
            <form onSubmit={sendEmail} className="form-container">
                <div className="form-row">
                    <label htmlFor=""><FontAwesomeIcon className="icon-form" icon={faUser}/> Nombre</label>
                    <input type="text" name="name" />
                    
                </div>

                <div className="form-row">
                    <label htmlFor=""><FontAwesomeIcon className="icon-form" icon={faEnvelope}/> Email</label>
                    <input type="email" name="email" />
                    
                </div>

                <div className="form-row">
                    <label htmlFor=""><FontAwesomeIcon className="icon-form" icon={faSign}/> Asunto</label>
                    <input type="text" name="subject" />
                    
                </div>

                <div className="form-row">
                    <label htmlFor=""><FontAwesomeIcon className="icon-form" icon={faComment}/> Mensaje</label>
                    <textarea name="message" id="" cols="auto" rows="10"></textarea>
                </div>

                <Button buttonSize="btn-medium" buttonStyle="btn-primary"><FontAwesomeIcon className="icon-form" icon={faPaperPlane}/> Enviar</Button>
            </form>
        </div>
      
    )
}

export default FormContact
