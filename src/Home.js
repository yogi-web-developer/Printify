import React from 'react'

export const Home = () => {
  return (
    <div>
      {/*Hero Section*/}
      <div id="carouselExampleCaptions" class="carousel slide" data-aos="fade-down" data-aos-duration="1000">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://i.pinimg.com/originals/25/9a/a2/259aa2a2025c459b596db392ab6a1444.jpg" class="d-block w-100" alt="..."></img>
            <div class="carousel-caption d-md-block">
              <h1>We bring Design Together With Technology</h1>
              <p>Copying and Printing Center</p>
              <button className='btn btn-primary  fw-bold'>Our Pricing</button>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://i.pinimg.com/736x/ec/f1/ce/ecf1cec6c85236b13c501347dd652c5e.jpg" class="d-block w-100" alt="..."></img>
            <div class="carousel-caption d-md-block">
              <h1>We bring Design Together With Technology</h1>
              <p>Copying and Printing Center</p>
              <button className='btn btn-primary fw-bold'>Our Pricing</button>
            </div>
          </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> {/*Hero Section Ends*/}
      {/*Welcome Section*/}
      <div className='welcomeSection'>
        <div className='welcomeImage' data-aos="fade-right" data-aos-duration="1000">
          <img src={require("./images/welcomeImage.png")}></img>
        </div>
        <div className='welcomeContent ms-lg-5' data-aos="zoom-in" data-aos-duration="1000">
          <h5 className='text-danger'>Welcome to printify</h5>
          <h1 className='fw-bold'>Dream it. Print it.</h1>
          <p>When we say we’re not happy until you’re happy, we really do mean it. So whether it’s a typo or an image that didn’t print quite the way you hoped, we’ll do everything we can to fix it.</p>
          <p className='mt-3'>We love great design and believe it can work wonders for every business. That’s why we make it simple to create beautiful, expertly crafted business stationery.</p>
          <p className='mt-3'>We love great design and believe it can work wonders for every business. That’s why we make it simple to create beautiful, expertly crafted business stationery.</p>
          <button className='btn btn-warning fw-bold p-2'>Learn More</button>
        </div>
      </div> {/*Welcome Section Ends*/}
      {/*Features Section*/}
      <div className='featuresSection'>
        <h5 className='text-center text-danger fw-bold' data-aos="fade-right" data-aos-duration="1000">Our Features</h5>
        <h1 className='text-center fw-bold' data-aos="fade-right" data-aos-duration="1000">What We Do</h1>
        <p className='w-lg-50 mx-auto text-center mt-3' data-aos="fade-right" data-aos-duration="1000">There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        <div className='d-lg-flex mt-5 justify-content-between cardContent'>
          <div class="card shadow" data-aos="flip-left" data-aos-duration="1000">
            <img src={require("./images/3d printing.jpg")} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">3d Printing</h5>
              <p class="card-text">3D printing or additive manufacturing is the construction of a three-dimensional object from a CAD model or a digital 3D model. It can be done in a variety of processes in which material is deposited, joined or solidified under computer control,</p>
            </div>
          </div>
          <div class="card shadow" data-aos="flip-left" data-aos-duration="1500">
            <img src={require("./images/digitalPrint.jpeg")} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Digital Printing</h5>
              <p class="card-text">Digital printing is the process of printing digital-based images directly onto a variety of media substrates. There is no need for a printing plate, unlike with offset printing.</p>
            </div>
          </div>
          <div class="card shadow" data-aos="flip-left" data-aos-duration="2000">
            <img src={require("./images/offsetPrint.jpg")} class="card-img-top" alt="..."></img>
            <div class="card-body">
              <h5 class="card-title">Offset Printing</h5>
              <p class="card-text">Offset printing, also called offset lithography, is a method of mass-production printing in which the images on metal plates are transferred to rubber blankets or rollers and then to the print media.</p>
            </div>
          </div>
        </div>
      </div>  {/*Features Section Ends*/}
      {/*Products Section*/}
      <div className='productsSection d-lg-flex justify-content-between'>
        <div className='productContent'>
          <h5 className='text-danger' data-aos="fade-right" data-aos-duration="1000">Checkout our Printing Products</h5>
          <h1 className='fw-bold' data-aos="fade-right" data-aos-duration="1000">Explore Printing Products</h1>
          <p data-aos="zoom-in" data-aos-duration="2000">We’re an online print and design company that is passionate about great design and the difference it can make to our customers and the world.</p>
          <p className='mt-3' data-aos="zoom-in" data-aos-duration="2000">We’re an online print and design company that is passionate about great design and the difference it can make to our customers and the world.</p>
          <p className='mt-3' data-aos="zoom-in" data-aos-duration="2000">We’re an online print and design company that is passionate about great design and the difference it can make to our customers and the world.</p>
          <div className='d-flex mt-5 productContact' data-aos="zoom-in" data-aos-duration="2000">
            <button className='btn btn-warning fw-bold'>Learn More</button>
            <p className='ms-5 mt-2 fw-bold'><i class="fa-solid fa-phone me-3"></i>000 8888 999</p>
          </div>
        </div>
        <div className='productImage' data-aos="zoom-in" data-aos-duration="1000">
          <img src={require("./images/productImages.jpg")}></img>
        </div>
      </div> {/*Products Section Ends*/}
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
