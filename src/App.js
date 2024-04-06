import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/AppHeader';
import IntroScreen from './components/IntroScreen';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    window.initMobileToggle();
    window.initTestimonialSlider();
  });
  return (
    <div>
   {/* ======= Mobile nav toggle button =======  */}
   {/* <button type="button" className="mobile-nav-toggle d-xl-none"><i className="bi bi-list mobile-nav-toggle"></i></button> */}
  <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
         {/* ======= Header =======  */}     
        <AppHeader/>
        <IntroScreen/>
        <main id="main">
          <About/>
          <Services/>
          <section id="testimonials" className="testimonials section-bg">
            <div className="container" data-aos="fade-up">

            <div className="section-title">
                <h2>Feedbacks</h2>
            </div>

            <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                <div className="swiper-wrapper">

                    <div className="swiper-slide">
                        <div className="testimonial-item">
                            <img src="assets/img/testimonials/unknown.png" className="testimonial-img" alt=""></img>
                            <h3>SyamBihari Chauhan</h3>
                            <h4>Client</h4>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                Ashish Sir, is the best criminal advocate in Allahabad High Court, he got us relief in many cases.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                        </div>
                    </div>

                    <div className="swiper-slide">
                        <div className="testimonial-item">
                            <img src="assets/img/testimonials/unknown.png" className="testimonial-img" alt=""></img>
                            <h3>Himanshu Seth</h3>
                            <h4>Sr. Advocate</h4>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                He is a good person, he listens to you properly and after that gives a proper advice. He helped me to get back my purchased home from the Bank.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                        </div>
                    </div>

                    <div className="swiper-slide">
                        <div className="testimonial-item">
                            <img src="assets/img/testimonials/unknown.png" className="testimonial-img" alt=""></img>
                            <h3>Sachin Kumar</h3>
                            <h4>Client</h4>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                I and my two brothers were stressed because of some false cases levelled against us, we have contacted sir and he helped us to get rid of the case. I suggest everyone who is looking for legal help in Allahabad, kindly contact him.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                        </div>
                    </div>

                    <div className="swiper-slide">
                        <div className="testimonial-item">
                            <img src="assets/img/testimonials/unknown.png" className="testimonial-img" alt=""></img>
                            <h3>ईद्दू खान</h3>
                            <h4>ग्राहक</h4>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                वह बहुत नेक इंसान हैं. हमारे परिवार के पास मेरा केस लड़ने के लिए पर्याप्त पैसे नहीं थे लेकिन उन्होंने बहुत ही कम फीस पर हमारा केस लड़ा और हमें राहत दिलाएं.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="testimonial-item">
                            <img src="assets/img/testimonials/unknown.png" className="testimonial-img" alt=""></img>
                            <h3>विपिन तिवारी</h3>
                            <h4>ग्राहक</h4>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                मेरा चयन पुलिस विभाग में हो गया है लेकिन विभाग मुझे ट्रेनिंग के लिए नहीं भेज रहा था, उस समय सर ने कानूनी सलाह देकर मेरी मदद की।
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                        </div>
                    </div>

                </div>
                <div className="swiper-pagination"></div>
            </div>

            </div>
          </section>
          <Contact/>
        </main>
        </div>
  );
}

export default App;
