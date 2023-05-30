import React from 'react';
import { RiFacebookCircleFill, RiTwitterFill, RiYoutubeFill, RiLinkedinFill } from 'react-icons/ri';
import './footer.css'

const Footer = () => {
  return (
    <div className="hm-footer-container">
        <div className="hm-footer">
              <div className="hm-logo">Logo</div>
              <div className="hm-footer-content">
                  <div className="hm-email">
                      <h3>Lorem ipsum</h3>
                      <p>Lorem ipsum dolor sit accusantium animi eaque sequi quas temporibus ut?</p>
                      <div className="hm-email-input">
                          <input type="text" placeholder="Enter your email address" />
                        <button>Subscribe</button>
                      </div>
                  </div>
                  <div className="hm-footer-links">
                      <ul className='hm-footer-cta-links'>
                          <li><a href="">Yorem</a></li>
                          <li><a href="">Yorem</a></li>
                          <li><a href="">Yorem</a></li>
                          <li><a href="">Yorem</a></li>
                          <li><a href="">Yorem</a></li>
                          <li><a href="">Yorem</a></li>
                      </ul>
                      <ul className='hm-footer-cta-social-links'>
                          <li><a href=""><RiFacebookCircleFill/></a></li>
                          <li><a href=""><RiTwitterFill/></a></li>
                          <li><a href=""><RiYoutubeFill/></a></li>
                          <li><a href=""><RiLinkedinFill/></a></li>
                        </ul>
                  </div>

              </div>
        </div>
    </div>
  )
}

export default Footer