import React from 'react'

function Contact() {
    return (
        <div>
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">
                        {/* <h6 className="title-subw3hny mb-2"><span>Contact Us</span></h6> */}
                        <h3 className="title-w3l mb-2">Get In Touch With Us</h3>
                        <p className="w3conatact-p mb-4">Start working with Us that can provide everything you need to generate awareness, drive traffic, connect.
                            We guarantee that you’ll be able to have any issue resolved within 24 hours.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 pe-lg-5">
                            <div className="row">
                                <div className="cont-details">
                                    <div className="cont-top" data-aos="fade-up" data-aos-duration={3000}>
                                        <div className="cont-left text-center">
                                            <i className="fas fa-map-marker-alt" />
                                        </div>
                                        <div className="cont-right">
                                            <h6>Company Address</h6>
                                            <p>Car Transko,#2214 cravel street, NY - 34336.</p>
                                        </div>
                                    </div>
                                    <div className="cont-top margin-up" data-aos="fade-up" data-aos-duration={3000}>
                                        <div className="cont-left text-center">
                                            <i className="fas fa-phone-alt" />
                                        </div>
                                        <div className="cont-right">
                                            <h6>Call Us</h6>
                                            <p><a href="tel:+1(21) 343 5677">+1(21) 343 5677</a></p>
                                            <p><a href="tel:+1(21) 343 5678">+1(21) 343 5678</a></p>
                                        </div>
                                    </div>
                                    <div className="cont-top margin-up" data-aos="fade-up" data-aos-duration={3000}>
                                        <div className="cont-left text-center">
                                            <i className="far fa-envelope" />
                                        </div>
                                        <div className="cont-right">
                                            <h6>Email Us</h6>
                                            <p><a href="mailto:example@mail.com" className="mail">example@mail.com</a></p>
                                            <p><a href="mailto:example@mail2.com" className="mail">example@mail2.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 mt-lg-0 mt-5" data-aos="fade-up" data-aos-duration={3000}>
                            <form action="https://sendmail.w3layouts.com/submitForm" method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="col form-group">
                                        <input type="text" className="form-control" name="w3lName" id="w3lName" placeholder="Name" required />
                                    </div>
                                    <div className="col form-group">
                                        <input type="email" className="form-control" name="w3lSender" id="w3lSender" placeholder="Email" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="w3lSubject" id="w3lSubject" placeholder="Subject" required />
                                </div>
                                <div className="form-group">
                                    <textarea name="w3lMessage" className="form-control" id="w3lMessage" placeholder="Message" required defaultValue={""} />
                                </div>
                                <div className="w3lhny-submit text-right">
                                    <button type="submit" className="btn btn-primary btn-style ">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="map-iframe mt-5 pt-lg-4">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2spl!4v1562654563739!5m2!1sen!2spl" width="100%" height={400} frameBorder={0} style={{ border: 0 }} allowFullScreen />
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Contact