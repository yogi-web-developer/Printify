import React from 'react'

const Aboutus = () => {
  return (
    <div>
      <div className='aboutusSection'>
        <h1 className='text-center fw-bold ' data-aos="zoom-in" data-aos-duration="1000">About Us</h1>
        <h5 className='text-center' data-aos="zoom-in" data-aos-duration="1000">Homepage / About us</h5>
      </div>
      <div className='mt-5 d-lg-flex cardSection'>
        <div class="card shadow" data-aos="flip-left" data-aos-duration="2000">
          <img src={require("./images/AboutCompanyImage.jpg")} class="card-img-top" alt="aboutOne"></img>
          <div class="card-body">
            <h5 class="card-title fw-bold">About Company</h5>
            <p class="card-text">Printify was founded in 2015 in Riga, Latvia by Artis Kehris, Gatis Dukurs, and James Berdigans. Later, it established its headquarters in San Francisco, California.It is headed by Janis Berdigans</p>
            <a href="#" class="btn btn-warning fw-bold">Learn More</a>
          </div>
        </div>
        <div class="card shadow" data-aos="flip-left" data-aos-duration="2000">
          <img src={require("./images/premiseImage.jpg")} class="card-img-top" alt="aboutTwo"></img>
          <div class="card-body">
            <h5 class="card-title fw-bold">Our Premises</h5>
            <p class="card-text">The platform of Printify helps connect its users with printing service providers, which located all over the world from North America to Australia.As of September 2021, there were two million users that were active on the website.</p>
            <a href="#" class="btn btn-warning fw-bold">Learn More</a>
          </div>
        </div>
        <div class="card shadow" data-aos="flip-left" data-aos-duration="2000">
          <img src={require("./images/howWework.jpg")} class="card-img-top" alt="aboutThree"></img>
          <div class="card-body">
            <h5 class="card-title fw-bold">How We Work</h5>
            <p class="card-text">The platform of Printify helps connect its users with printing service providers, which located all over the world from North America to Australia.As of September 2021, there were two million users that were active on the website.</p>
            <a href="#" class="btn btn-warning fw-bold">Learn More</a>
          </div>
        </div>
      </div>
      <div className='perfectSection d-lg-flex'>
        <div className='whatWeDoContent'>
          <h5 className='fw-bold' data-aos="fade-right" data-aos-duration="1000">What We do</h5>
          <h1 className='fw-bold' data-aos="fade-left" data-aos-duration="1000">You’ll get a perfect fit for your business.</h1>
          <p data-aos="zoom-in" data-aos-duration="2000">Handing out a business card is often the first impression people take of your business, so you need to get it right. Using your own photography or artwork to create custom business cards can help, and PRINTIFY makes the process easy with our simple online tools and templates. Handing out a business card is often the first impression people take of your business, so you need to get it right. Using your own photography or artwork to create custom business cards can help, and PRINTIFY makes the process easy with our simple online tools and templates. Handing out a business card is often the first impression people take of your business, so you need to get it right. Using your own photography or artwork to create custom business cards can help, and PRINTIFY makes the process easy with our simple online tools and templates.</p>
          <button className='btn btn-light fw-bold'>Learn More</button>
        </div>
        <div className='whatWeDoImage'>
          <img src={require("./images/whatWeDoImage.jpg")}></img>
        </div>
      </div>
      <div className='leadersSection mt-5' data-aos="fade-right" data-aos-duration="2000">
        <h5 className='text-center text-danger fw-bold'>The Leadership</h5>
        <h1 className='text-center fw-bold'>Meet The Team</h1>
        <p className='w-50 text-center mx-auto'>There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form.</p>
      </div>
      <div className='teamLeaders d-lg-flex mt-4'>
        <img src={require("./images/teamLeader1.png")} data-aos='flip-left' data-aos-duration="1000"></img>
        <img src={require("./images/teamLeader2.png")} data-aos='flip-left' data-aos-duration="1500"></img>
        <img src={require("./images/teamLeader3.png")} data-aos='flip-left' data-aos-duration="2000"></img>
      </div>
      <div className='testimonialHeading mt-4' data-aos="fade-right" data-aos-duration="2000">
        <h5 className='text-center text-danger fw-bold'>Testimonials</h5>
        <h1 className='text-center fw-bold'>What our Client Says</h1>
      </div>
      <div className='testimonialSection d-lg-flex justify-content-around mt-5' data-aos="zoom-in" data-aos-duration="2000">
        <div className='testimonialOne shadow d-lg-flex'>
          <div className='testimonialImg'>
            <img src={require("./images/testimonialOne.jpg")}></img>
          </div>
          <div className='testimonialContent ms-4'>
            <p>This is Due To their Excellent Services, Competitive Pricing and Customer Support. It's thoroughly refreshing to get a personal touch</p>
            <p> - Christin Eve</p>
          </div>
        </div>
        <div className='testimonialOne shadow d-lg-flex'>
          <div className='testimonialImg'>
            <img src={require("./images/testimonialTwo.jpg")}></img>
          </div>
          <div className='testimonialContent ms-4'>
            <p>This is Due To their Excellent Services, Competitive Pricing and Customer Support. It's thoroughly refreshing to get a personal touch</p>
            <p> - Mildred Rodriguez</p>
          </div>
        </div>
      </div>
      {/*Footer Section*/}
      <div className='footerSection d-lg-flex justify-content-between mt-4'>
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

export default Aboutus