import React from 'react'
import style from './Contact.module.css'
import logo from '../../Assets/House_Logos.png'
import Support from '../Support/Support';

export default function Contact() {
  return (
    <>
      {/* <!-- Start Section1 "banner" --!> */}
      <section className= {style.banner}>
        <div className="container">
          <div className="row">
            <div className="col">
            <img src={logo} alt="logo" className={style.logo} />
              <h2 className={style.title}>Contact</h2>
              <div className='text-center fw-bold'>
                <span>Home </span>
                <span> <i className="fa-solid fa-chevron-right"></i></span>
                <span> Contact</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Section1 "banner" --!> */}

      {/* <!-- Start Section2 "contact" --!> */}
      <section className={style.contact}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="text-center pt-4 mt-5">
                <h3>Get In Touch With Us</h3>
                <p className="text-secondary pt-2">
                  For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> 
                  An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 col-md-12">
              <div className= {`pt-4 mt-5 ${style.contactInfo}`}>
                <div className={style.info}>
                  <div className={style.icon}>
                    <i className="fa-solid fa-location-dot"></i>
                    <h5> Address</h5>
                  </div>
                  <p>
                    236 5th SE Avenue,<br />
                    New York NY10000,<br />
                    United States
                  </p>
                </div>
                <div className={style.info}>
                  <div className={style.icon}>
                    <i class="fa-solid fa-phone"></i>
                    <h5>Phone</h5>
                  </div>
                  <p>
                    Mobile: +(84) 546-6789 <br />
                    Hotline: +(84) 456-6789
                  </p>
                </div>
                <div className={style.info}>
                  <div className={style.icon}>
                    <i class="fa-solid fa-clock"></i>
                    <h5>Working Time</h5>
                  </div>
                  <p>
                    Monday-Friday: 9:00 - 22:00 <br />
                    Saturday-Sunday: 9:00 - 21:00
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 ">
              <div className= {`pt-4 mt-5 ${style.contactForm}`}>
                <form>
                  <div class="mb-4">
                    <label for="name" class="form-label">Your name</label>
                    <input type="text" class="form-control" id="name" placeholder="Abc"/>
                  </div>
                  <div class="mb-4">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="Abc@def.com"/>
                  </div>
                  <div class="mb-4">
                    <label for="subject" class="form-label">Subject</label>
                    <input type="text" class="form-control" id="subject" placeholder="This is an optional"/>
                  </div>
                  <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea class="form-control" id="message" rows="3" placeholder="Hi! i’d like to ask about"></textarea>
                  </div>
                  <button className={style.submit}>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Section2 "contact" --!> */}

      {/* <!-- Start Section3 "support" --!> */}
        <Support />
      {/* <!-- End Section3 "support" --!> */}
    </>
  )
}
