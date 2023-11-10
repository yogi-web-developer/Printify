import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_197qkbp', 'template_jr3byqj', form.current, 'ihdDQuAvCw-cRtJ20')
      .then((result) => {
        Swal.fire({
          title: "Good job!",
          text: "Message Sent Successfully ! The Company will Contact You",
          icon: "success"
        });
      }, (error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Sending Message Is Compulsory", 
        });
      });
  };
  return (
    <div>
      <div className='contactSection'>
        <h1 className='text-center fw-bold'>Contact Us</h1>
        <h5 className='text-center fw-bold'>Homepage / Contact Us</h5>
      </div>
      <div className='map-responsive' data-aos="fade-right" data-aos-duration="2000">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.596689362119!2d-75.55023102448406!3d39.7487094960271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580864f7fbdbd%3A0x149651e49fe04f0d!2sPrintify!5e0!3m2!1sen!2sin!4v1699418958808!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='responsiveMap'></iframe>
      </div>
      <div className='contactFormSection d-lg-flex'>
        <div className='contactForm' data-aos="zoom-in" data-aos-duration="1000">
          <h5 className='text-danger fw-bold'>Contact With us</h5>
          <h2 className='fw-bold'>Send Messages</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div class="mb-3">
              <input type="text" class="form-control" id="nameInput" aria-describedby="emailHelp" placeholder='Your Name' name="user_name"></input>
            </div>
            <div class="mb-3">
              <input type="tel" class="form-control" id="mobileInput" placeholder='Your Number' name="user_number" ></input>
            </div>
            <div class="mb-3">
              <input type="mail" class="form-control" id="mailInput" placeholder='Your Email Address' name='user_email'></input>
            </div>
            <div class="form-floating">
              <textarea class="form-control" placeholder="textareaInput" id="floatingTextarea2" name="message"></textarea>
              <label for="floatingTextarea2">What are You Looking for?</label>
            </div>
            <button type="submit" class="btn btn-primary mt-4">Submit</button>
          </form>
        </div>
        <div className='contactDetails ms-lg-4'>
          <h5 className='text-danger fw-bold text-center' data-aos="zoom-in" data-aos-duration="2000">Contact info</h5>
          <h2 className='fw-bold text-center' data-aos="zoom-in" data-aos-duration="2000">Details</h2>
          <div className='address text-center mt-3' data-aos="zoom-in" data-aos-duration="2000">
            <h4>Address</h4>
            <p className='w-50 mx-auto'>88 New Street, Washington DC, United States, America</p>
          </div>
          <div className='phone text-center' data-aos="zoom-in" data-aos-duration="2000">
            <h4>Phone Number</h4>
            <p>Local: 222 999 888 Mobile: 000 8888 999</p>
          </div>
          <div className='mail text-center mt-4' data-aos="zoom-in" data-aos-duration="2000">
            <h4>E-Mail</h4>
            <p>needhelp@printify.com inquiry@printify.com</p>
          </div>
          <div className='mail text-center mt-4' data-aos="zoom-in" data-aos-duration="2000">
            <h4>Follow Us</h4>
            <div className='socialMedia'>
              <i class="fa-brands fa-facebook-f ms-lg-5"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-pinterest"></i>
              <i class="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>
      <div className='faqSection'>
        <h5 className='text-center text-danger fw-bold' data-aos="fade-right" data-aos-duration="1000">Frequently Asked Questions</h5>
        <h1 className='text-center fw-bold' data-aos="fade-right" data-aos-duration="1500">Do You Have Questions ?</h1>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item mt-4" data-aos="zoom-in" data-aos-duration="2000">
            <h2 class="accordion-header">
              <button class="accordion-button fw-bold bg-white border-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                What is Printify ?
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>Printify was founded in 2015 in Riga, Latvia by Artis Kehris, Gatis Dukurs, and James Berdigans. Later, it established its headquarters in San Francisco, California. It is headed by Janis Berdigans. Printify was founded in 2015 in Riga, Latvia by Artis Kehris, Gatis Dukurs, and James Berdigans. Later, it established its headquarters in San Francisco, California. It is headed by Janis Berdigans</p>
              </div>
            </div>
          </div>
          <div class="accordion-item" data-aos="zoom-in" data-aos-duration="2000">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                How Many Users are using Printify ?
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>In May 2018, Printify received an investment of $1 million to expand its services to the United States. In the following year, it received an additional investment of $3 million, including from H&M.In November 2020, Printify relocated its headquarters to Spikeri, Riga. It was also included in the Financial Times list in 2020.In October 2021, Printify received an investment of $45 million in Series A funding</p>
              </div>
            </div>
          </div>
          <div class="accordion-item" data-aos="zoom-in" data-aos-duration="2000">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Who is the CEO of Printify?
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <p>James Berdigans is the co-founder and CEO of Printify, which was created to give anyone anywhere the chance to sell custom products online without the risks of holding large amounts of inventory.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Footer Section*/}
      <div className='footerSection d-lg-flex justify-content-between'>
        <div className='footerOne'>
          <h2>About Printify</h2>
          <p>Printify is an online design,copying and printing company that is passionate about great design and the difference it can make to our customers and the world.</p>
        </div>
        <div className='footerTwo'>
          <h2>Explore</h2>
          <p>Home</p>
          <p>About Us</p>
          <p>Our Products</p>
          <p>Plan's and Pricing</p>
          <p>How it Works</p>
        </div>
        <div className='footerThree'>
          <h2>Explore</h2>
          <p>Home</p>
          <p>About Us</p>
          <p>Our Products</p>
          <p>Plan's and Pricing</p>
          <p>How it Works</p>
        </div>
        <div className='footerFour'>
          <h2>Newsletter Sign In</h2>
          <p>Subscribe this Website for your upcoming Updates</p>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="mail" placeholder="Enter Your E-Mail Address" aria-label="Search"></input>
            <button class="btn btn-outline-light" type="submit">Submit</button>
          </form>
        </div>
      </div> {/*Footer Section Ends*/}
      {/*Copyrights Section*/}
      <div className='copyrightsSection d-flex justify-content-between'>
        <p className='fw-bold'><i class="fa-regular fa-copyright me-2"></i>Copyrights By YogeX 2023</p>
        <p className='fw-bold'>All Rights Reserved</p>
      </div> {/*Copyrights Section Ends*/}

    </div>
  )
}

export default Contact