import { useEffect } from "react";
function About(){
    useEffect(()=>{
              window.initPureCounter();
    });
    return(
<>
<section id="about" className="about">
    <div className="container" data-aos="fade-up">

        <div className="section-title">
            <h2>About</h2>
            <p>
                I have experience of 3 years in the High Court, Allahabad and has completed LLB from the prestigious, Faculty of Law, University of Delhi in 2021.
                I have specialisation in Education Litigation, Service Litigation(Pension& Promotion) Property & Debt Recovery, Cyber crimes, Cheque Bounce cases, NDPS, BAIL, Anticipatory Bail,482, Criminal Matters,WRIT, PETITIONS, PIL, Civil Litigation.
                One can approach me to get the best legal advice and services.I always puts my clients well being first, consult in very normal language so that clients can understand difficult legal terminology easily.
            </p>
        </div>

        <div className="row">
            <div className="col-lg-4">
                <img src="assets/img/profile-img.jpg" className="img-fluid" alt=""></img>
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
                <h3>Advocate Highcourt Allahabad</h3>
                <p className="fst-italic">
                    Please have look on my personal details and give a chance to serve you. Feel free to reach out to me by mail or contact number provided over here. You can also visit to my office (address is in detail) located in Highcourt promise.
                </p>
                <div className="row">
                    <div className="col-lg-6">
                        <ul>
                            <li><i className="bi bi-chevron-right"></i> <strong>Office:</strong> <span>Chamber No. 48-C, Near Triveni Hall</span></li>
                            <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>http://www.allahabadhighcourt.in</span></li>
                            <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>9454056209</span></li>
                            <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Prayagraj, Uttar Pradesh</span></li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <ul>
                            <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>cashish127@gmail.com</span></li>
                            <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>B.Tech LLB</span></li>
                            <li><i className="bi bi-chevron-right"></i> <strong>Consultation Time:</strong> <span>10:00 AM To 5:00 PM</span></li>
                            <li><i className="bi bi-chevron-right"></i> <strong>Consultation:</strong> <span>Available</span></li>
                        </ul>
                    </div>
                </div>
                <p>
                    Following details are approximate calculation that I have served so for and continue grow.
                </p>

                <div className="row">
                    <section id="facts" className="facts">
                        <div className="container" data-aos="fade-up">

                            <div className="row">

                                <div className="col-lg-3 col-md-6">
                                    <div className="count-box">
                                        <i className="bi bi-emoji-smile"></i>
                                        <span data-purecounter-start="0" data-purecounter-end="50" data-purecounter-duration="1" className="purecounter"></span>
                                        <p>Happy Clients</p>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                                    <div className="count-box">
                                        <i className="bi bi-journal-richtext"></i>
                                        <span data-purecounter-start="0" data-purecounter-end="200" data-purecounter-duration="1" className="purecounter"></span>
                                        <p>Projects</p>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                                    <div className="count-box">
                                        <i className="bi bi-headset"></i>
                                        <span data-purecounter-start="0" data-purecounter-end="10000" data-purecounter-duration="1" className="purecounter"></span>
                                        <p>Hours Of Support</p>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                                    <div className="count-box">
                                        <i className="bi bi-award"></i>
                                        <span data-purecounter-start="0" data-purecounter-end="2" data-purecounter-duration="1" className="purecounter"></span>
                                        <p>Awards</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>
                </div>

            </div>
        </div>
    </div>
</section>
</>
    );
}
export default About;