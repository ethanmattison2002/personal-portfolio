import {useRef} from "react";
import emailjs from '@emailjs/browser';

export default function ContactMe() {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_yvl2j1r', 'template_og0kzno', form.current, {
            publicKey: 'jGc8HDnwVMWIDUTkS',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              document.querySelector("#form--submitted").classList.add('form--submit--success');
            },
            (error) => {
              console.log('FAILED...', error.text);
              document.querySelector("#form--error").classList.add('form--submit--error');
            },
          );
          e.target.reset()
      };

    return (
        <section id="ContactMe" className="contact--section">
            <div className="section--header">
                <p>Get In Touch</p>
                <h1>Contact Me</h1>
            </div>
            <form ref={form} onSubmit={sendEmail} className="contact--form--container">
                <div className="row">
                    <div className="col-md-6">
                        <label htmlfor="first-name" className="contact--label">
                            <span className="text-md">First Name *</span>
                            <input type="text" placeholder="Enter your first name..." className="contact--input text-md" name="first-name" id="first-name" required/>
                        </label>
                        <label htmlfor="user_email" className="contact--label">
                            <span className="text-md">Email *</span>
                            <input type="text" placeholder="Enter your email..." className="contact--input text-md" name="user_email" id="user_email" required/>
                        </label>
                    </div>
                    <div className="col-md-6">
                        <label htmlfor="last-name" className="contact--label">
                            <span className="text-md">Last Name *</span>
                            <input type="text" placeholder="Enter your last name..." className="contact--input text-md" name="last-name" id="last-name" required/>
                        </label>
                        <label htmlfor="phone-number" className="contact--label">
                            <span className="text-md">Phone Number *</span>
                            <input type="number" placeholder="Enter your number..." className="contact--input text-md" name="phone-number" id="phone-number" required/>
                        </label>
                    </div>
                </div>
                <label htmlfor="user_message" className="contact--label">
                    <span className="text-md">Message</span>
                    <textarea className="contact--input text-md" rows="8" name="user_message" id="user_message" placeholder="Type your message..."></textarea>
                </label>
                <div className="d-flex justify-content-end">
                    <button type="submit" className="my-btn btn-primary contact--form--btn">Send Message</button>
                </div>
                <div className="form--message alert alert-success mt-3" id="form--submitted">
                    Form Submitted Successfully !
                </div>
                <div className="form--message alert alert-danger" id="form--error">
                    Form Submission Error !
                </div>
            </form>
        </section>
    )
}