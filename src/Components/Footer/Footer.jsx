import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-2 col-xl-3">
              <div className="tt-mobile-collapse">
                <h4 className="tt-collapse-title">Customer Service</h4>
                <div className="tt-collapse-content">
                  <address>
                    <p><span>ADDRESS:</span> Shastri Nagar Near Metro Station Landmark Gurudwara</p>
                    <p><span>PHONE:</span> +91 9876543210</p>
                    <p><span>E-MAIL:</span> <a href="mailto:info@mydomain.com">info@mydomain.com</a></p>
                  </address>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 col-xl-3">
              <div className="tt-mobile-collapse">
                <h4 className="tt-collapse-title">Information</h4>
                <div className="tt-collapse-content">
                  <ul className="tt-list">
                    <li><Link to="/pages/about-us">About Us</Link></li>
                    <li><Link to="/pages/contact">Contact</Link></li>
                    <li><Link to="/pages/privacy-policy">Privacy Policy</Link></li>
                    <li><Link to="/pages/terms-conditions">Terms & Conditions</Link></li>
                    <li><Link to="/pages/returns-and-refunds">Returns and Refunds</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg col-xl-3">
              <div className="tt-mobile-collapse">
                <h4 className="tt-collapse-title">Categories</h4>
                <div className="tt-collapse-content">
                  <ul className="tt-list">
                    <li><Link to="/collections/hindu-dieties">Hindu Dieties</Link></li>
                    <li><Link to="/collections/home-decor">Home Decor</Link></li>
                    <li><Link to="/collections/home-kitchen">Home & Kitchen</Link></li>
                    <li><Link to="/collections/pooja-decor">Pooja Decor</Link></li>
                    <li><Link to="/collections/wooden-collection">Wooden Collection</Link></li>
                    <li><Link to="/collections/antique-collection">Antique Collection</Link></li>
                    <li><Link to="/collections/festive-collection">Festive Collection</Link></li>
                    <li><Link to="/collections/stock-clearance">Clearance Sale</Link></li>
                    <li><Link to="/collections/rakhi-collection">Rakhi Collection</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-3">
              <div className="tt-newsletter">
                <div className="tt-mobile-collapse">
                  <h4 className="tt-collapse-title">Stay Connected</h4>
                  <div className="tt-collapse-content">
                    <ul class="tt-social-icon footersocial">
                      <li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a></li>
                      <li><a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                      <li><a href="https://www.youtube.com/" target="_blank"><i class="fab fa-youtube"></i></a></li>
                      <li><a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                    </ul>

                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---- Copyright ---  */}
          <div className="row copyright">
            <div className="col-12 text-center">
              <p>© Copyright 2024, BRAND NAME. Designed by <a href="https://digital4now.in/" target="_blank">DIGITAL4NOW</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer