import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
export default function Contact() {
    const form = useRef();
    const handleFormSubmit = (event) => {
        event.preventDefault();
        let thisForm = event.currentTarget;
        thisForm.querySelector('.loading').classList.add('d-block');
        thisForm.querySelector('.error-message').classList.remove('d-block');
        thisForm.querySelector('.sent-message').classList.remove('d-block');
        form.current.reply_to = "advashishchaurasiya@gmail.com";
        form.current.to_name = "Adv. Ashish Chaurasiya";
        emailjs
            .sendForm('service_30qx08m', 'template_s6p33do', form.current, {
                publicKey: 'Er-x4KRuGwXIfOyaN',
            })
            .then(
                () => {
                    setTimeout(function () {
                        thisForm.querySelector('.sent-message').classList.remove('d-block');
                    }, 5000)
                    thisForm.querySelector('.sent-message').classList.add('d-block');
                    thisForm.querySelector('.loading').classList.remove('d-block');
                    thisForm.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    displayError(thisForm, "Failed to send you!");
                },
            );
    };
    function displayError(thisForm, error) {
        thisForm.querySelector('.loading').classList.remove('d-block');
        thisForm.querySelector('.error-message').innerHTML = error;
        thisForm.querySelector('.error-message').classList.add('d-block');
    };
    return (
        <>
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Contact</h2>
                    </div>

                    <div className="row mt-1">

                        <div className="col-lg-4">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt"></i>
                                    <h4>Location:</h4>
                                    <p>Chamber No. 48-C, Near Triveni Hall, Prayagraj 211017</p>
                                </div>

                                <div className="email">
                                    <i className="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>cashish127@gmail.com</p>
                                </div>

                                <div className="phone">
                                    <i className="bi bi-phone"></i>
                                    <h4>Call:</h4>
                                    <p>9454056209</p>
                                </div>

                            </div>

                        </div>

                        <div className="col-lg-8 mt-5 mt-lg-0">

                            <form ref={form} onSubmit={handleFormSubmit} role="form" className="php-email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="from_name" className="form-control" id="user_name" placeholder="Your Name" required></input>
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="from_email" id="user_email" placeholder="Your Email" required></input>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-md-6 form-group">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required></input>
                                    </div>
                                    <div className='col-md-6 form-group mt-3 mt-md-0'>
                                        <input type="number" className="form-control" name="contact_number" id="subject" placeholder="Contact Number" required></input>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Thank you for contacting us, our team will reach you as soon as possible.</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>

                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}