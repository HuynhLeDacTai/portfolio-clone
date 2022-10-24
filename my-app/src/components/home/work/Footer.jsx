import React from 'react'

const Footer = () => {
  return (
    <>
    <footer>
        <div className="container grid1">
            <div className="box">
                <img src="./assets/logo1.png" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit qui reprehenderit labore distinctio fuga sed voluptate nisi ullam temporibus incidunt?</p>
            <div className="socialIcon">
            <i className="fab fa-facebook-f "></i>
              <i className="fab fa-instagram "></i>
              <i className="fab fa-twitter "></i>
              <i className="fab fa-youtube "></i>
              <i className="fab fa-pinterest "></i>
              <i className="fab fa-dribbble "></i>
            </div>
            </div>
            <div className="box">
                <h2>Quick Links</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>News</li>
                    <li>Contact</li>
                    <li>FAQ's</li>
                </ul>
            </div>
            <div className="box">
                <h2>Recent Post</h2>
                <div className="text">
                    <p>3 WooCommerce Plugins to Boost Sales</p>
                    <span>24 Oct 2022</span>
                </div>
                <div className="text">
                    <p>3 WooCommerce Plugins to Boost Sales</p>
                    <span>24 Oct 2022</span>
                </div>
                <div className="text">
                    <p>3 WooCommerce Plugins to Boost Sales</p>
                    <span>24 Oct 2022</span>
                </div>
            </div>

            <div className="box">
                <h2>Get in touch</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ex iste. Quia quae, suscipit neque quam harum dignissimos illum voluptatem.</p>
            <div className="icon">
                <i className="fa fa-location-dot"></i>
                <label htmlFor="">Location: Duy Xuyen, Quang Nam</label>
            </div>
            <div className="icon">
                <i className="fa fa-phone"></i>
                <label htmlFor="">Phone: +84 712 261 876</label>
            </div>
            <div className="icon">
                <i className="fa fa-envelope"></i>
                <label htmlFor="">Email: support@gmail.com</label>
            </div>
            </div>
        </div>

        <div className="legal container">
            <p>Copyright @2022.All rights reserved.</p>
            <label htmlFor="">
                Design & Developed by <span>TonyTai</span>
            </label>
        </div>
    </footer>
    </>
  )
}

export default Footer