import React from "react";
import "./footer.scss";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-2 col-sm-3">
            <div className="footerLeft">
              <button className="btn">
                <FaTwitter className="FaTwitter" />
              </button>
              <button className="btn">
                <FaFacebook className="FaFacebook" />
              </button>
              <button className="btn">
                <FaLinkedin className="FaLinkedin" />
              </button>
            </div>
          </div>
         <div className="col-lg-6 col-md-5 col-sm-5">
         <div className="row">
          <div className="col-lg-4">
         <div className="footerMiddle">
           <span>Terms of Service</span>
         </div>
       </div>
       <div className="col-lg-4">
         <div className="footerMiddle">
         <span>Privacy Policy</span>

         </div>
       </div>
       <div className="col-lg-4">
         <div className="footerMiddle">
           <span>Trust & Safety</span>

         </div>
       </div>
         </div>
        
         </div>
          <div className="col-lg-3 col-md-5 col-sm-4">
            <div className="footerRight">
              <span>
                Language:
                <select name="language" className="language">
                  <option value="en">EN</option>
                  <option value="ru">RU</option>
                  <option value="az">AZ</option>
                </select>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
