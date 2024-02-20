import React from 'react';
import "./Footer.scss";
import { FaStore } from "react-icons/fa6";
import { IoGiftOutline } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className = "footer py-5 bg-dark">
        <div className = "container">
            <div className = "footer-content text-white grid">
                <div className = "footer-item text-center">
                    <h6 className = "fs-17 fw-6">Links</h6>
                    <ul>
                        <li><a href = "/aboutus" className = "fs-15">About Us</a></li>
                        <li><a href = "/contact" className = "fs-15">Contact Us</a></li>
                        <li><a href = "/blog" className = "fs-15">Blog</a></li>
                        <li><a href = "faq" className = "fs-15">FAQ's</a></li>
                    </ul>
                </div>

                <div className = "footer-item text-center">
                    <h6 className='fs-17 fw-6'>Policies</h6>
                    <ul>
                        <li><a href = "/terms" className = "fs-15">Terms & Conditions</a></li>
                        <li><a href = "/cookies" className = "fs-15">Cookies Policy</a></li>
                        <li><a href = "/policy" className = "fs-15">Data Policy</a></li>
                    </ul>
                </div>

                <div className = "footer-item text-center">
                    <h6 className='fs-17 fw-6'>About Flipkart</h6>
                    <ul>
                        <li><a href = "/terms" className = "fs-15">Company Info</a></li>
                        <li><a href = "/cookies" className = "fs-15">Branches</a></li>
                        <li><a href = "/policy" className = "fs-15">Store</a></li>
                    </ul>
                </div>

                <div className = "footer-item text-center">
                    <h6 className='fs-17 fw-6'>Contact us</h6>
                    <ul>
                        <li>
                            <span><i className = "fas fa-phone"></i></span>
                            <span className = "fs-15">+678 004 5754</span>
                        </li>
                        <li>
                            <span><i className = "fas fa-envelope"></i></span>
                            <span className = "fs-15">info@Flipkart.com</span>
                        </li>
                    </ul>
                </div>
                <div className = "footer-item text-center">
                    <h6 className='fs-17 fw-6'>Social</h6>
                    <ul>
                        <li>
                            <span>
                           <i className="fa-brands fa-instagram"></i></span>
                        </li>
                        <li>
                            <span><i class="fa-brands fa-x-twitter"></i></span>
                        </li>
                        <li>
                            <span><i className="fa-brands fa-facebook"></i></span>
                        </li>
                        <li>
                            <span><i className="fa-brands fa-youtube"></i></span>
                        </li>
                    </ul>
                    </div>
                    <div className = "footer-item text-center">
                    <h6 className='fs-17 fw-6'>Available On</h6>
                    <ul>
                        <li>
                            <span>
                           <i className="fa-brands fa-google-play"></i></span>
                            <span className = "fs-15">PlayStore</span>
                        </li>
                        <li>
                            <span><i class="fa-brands fa-app-store"></i></span>
                            <span className = "fs-15">AppleStore</span>
                        </li>
                        </ul>
                        </div>
                        <div className='footer-item '>
                            <ul>
                            <li><FaStore />
                              <span className='fs-15'>Become Seller</span>
                              </li>
                            <li><IoGiftOutline />
                              <span className='fs-15'>Gift</span>
                              </li>
                            <li><MdSupportAgent />
                              <span className='fs-15'></span>Help Center</li>
                            <li><FaRegCopyright />
                              <span className='fs-15'>2007-2024 Flipkart.com</span></li>  
                              <li><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" alt="Payment methods"></img></li>       
                           </ul>
                        </div>
            </div>  
        </div>
    </footer>
  )
}

export default Footer