import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Navabar = () => {
  return (
    <div className=''>
      <nav class="navbar navbar-expand-lg sticky-top bg-white">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={require("./images/printifyLogo.png")} alt="Bootstrap" width="200" height="100"></img>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" >Home </Link>
              </li>
              <li class="nav-item">
                <Link to="about">About</Link>
              </li>
              <li class="nav-item">
                <Link to="product">Product</Link>
              </li>
              <li class="nav-item">
                <Link to="cart">Cart </Link>
              </li>
              <li class="nav-item">
                <Link to="contact">Contact </Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>

      <Outlet />




    </div>
  )
}
