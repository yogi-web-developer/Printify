import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export const Cart = ({ cart, setCart }) => {
  const showNotification = () => {
    Swal.fire({
      icon: 'success',
      title: 'Removed',
      text: 'The product has been removed from cart successfully.',
      customClass: {
        content: 'custom-sweetalert-font',
      },
    });
  };
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let amount = 0;
    cart.map((pp) => amount = (pp.count * pp.price) + amount)
    setPrice(amount)
  })

  const removeProgram = (aa) => {
    let removeddata = cart.filter((ss) => ss.id !== aa.id)
    setCart(removeddata)
  }

  const countProgram = (aa, dd) => {
    let findingPosition = cart.indexOf(aa)
    cart[findingPosition].count = cart[findingPosition].count + dd
    setCart([...cart])
  }

  return (
    <div className='cartContentSection'>
      <div className="cartSection">
        <h1 className="text-center fw-bold" data-aos="zoom-in" data-aos-duration="1000">
          Cart
        </h1>
        <h5 className="text-center" data-aos="zoom-in" data-aos-duration="1000">
          Homepage / Cart
        </h5>
      </div>
      <div className='cartHeading mt-3'>
        <h5 className='text-danger text-center fw-bold'>Cart</h5>
        <h1 className='text-center fw-bold'>Choosen Products</h1>
      </div>
      <div className="row cartContent mt-4">
        {
          cart && cart.map((aa) => (
            <div className="col-lg-3" key={aa.id}>
              <div className="card shadow cart" style={{ width: '20rem' }} data-aos="zoom-in" data-aos-duration="2000">
                <img src={aa.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{aa.name}</h5>
                  <p className="card-text">{aa.price}</p>
                  <button className="btn btn-primary" onClick={() => { removeProgram(aa); showNotification();}}> Remove </button>
                  <div className='d-flex mt-3'>
                    <button onClick={() => countProgram(aa, 1)} className='btn btn-light'>+</button>
                    <p className="card-text mt-1 ms-3">{aa.count}</p>
                    <button onClick={() => countProgram(aa, -1)} className='btn btn-light ms-4'>-</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <h1 className='totalprice text-center'>Total Amount : {price}</h1>
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
  );
};

export default Cart
