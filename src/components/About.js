import { useEffect } from "react";

function About(){
    useEffect(()=>{
              window.initPureCounter();
    });
    return(
    <div>
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About</h2>
          <p>
          Has 4 Years of rich experience in dealing civil, service, criminal 
          and other matters in HIGH Court Allahabad. He is an alumnus of prestigious Delhi University.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img src="assets/img/profile-img.jpg" className="img-fluid" alt=""></img>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Advocate Highcourt Allahabad</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
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
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
            </p>

            <div className="row">
        <section id="facts" className="facts">
    <div className="container" data-aos="fade-up">
{/* 
      <div className="section-title">
        <h2>Facts</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div> */}

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
    </div>
    );
}
export default About;