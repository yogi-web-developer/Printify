import React from 'react'
import Productdetails from './Productdetails'
import Swal from 'sweetalert2';

export const Products = ({ cart, setCart }) => {
  const showNotification = () => {
    Swal.fire({
      icon: 'success',
      title: 'Added to Cart!',
      text: 'The product has been added to your cart successfully.',
      customClass: {
        content: 'custom-sweetalert-font',
      },
    });
  };
  return (
    <div>
      <div className='productSection'>
        <h1 className='text-center fw-bold ' data-aos="zoom-in" data-aos-duration="1000">Product</h1>
        <h5 className='text-center' data-aos="zoom-in" data-aos-duration="1000">Homepage / Product</h5>
      </div>
      <div className='productHeading'>
        <h5 className='text-danger fw-bold text-center' data-aos="fade-right" data-aos-duration="2000">Products</h5>
        <h1 className=' fw-bold text-center' data-aos="fade-right" data-aos-duration="2000">Latest Collection</h1>
      </div>
      <div className='d-lg-flex justify-content-between'>
        {Productdetails.map((aa, index) => (
          <div className='col-lg-3 mt-5 cardsection' key={index}>
            <div className='card shadow' data-aos="zoom-in" data-aos-duration="2000">
              <img src={aa.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title fw-bold">{aa.name}</h5>
                <p className="card-text">Price : {aa.price}</p>
                <button className='btn btn-primary' onClick={() => {setCart([...cart, aa]); showNotification();}}>Add To Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/*Footer Section*/}
      <div className='footerSection d-lg-flex mt-4 justify-content-between'>
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

export default Products
