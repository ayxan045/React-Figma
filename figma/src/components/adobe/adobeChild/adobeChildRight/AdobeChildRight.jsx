import React from "react";
import "./adobeChildRight.scss";
// import { RiArrowDownSLine } from "react-icons/ri";
import imgAdobe from "../../../../img/adobeIcon.png";
import imgA from "../../../../img/a.png";
const AdobeChildRight = () => {
  return (
    <div className="adobeChildRight">
      <div className="adobeCom">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="adobeComTopLeft">
              <div className="adobeIcon d-flex">
                <img className="img-fluid" src={imgAdobe} alt="" />
                <h5 className="ms-2 mt-1">Adobe</h5>
              </div>
              <h6 className="mt-2">https://www.adobe.com</h6>
            </div>
            <div className="adobeComTopRight d-flex justify-content-end">
              <div className="iconA">
                <img className="img-fluid" src={imgA} alt="" />
              </div>
              <div className="iconAtxt">
                <h6>3.5</h6>
                <span>Local rating</span>
              </div>
              <div className="iconAtxt">
                <h6>5.0</h6>
                <span>Global rating</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="adobeGreen">
            <div className="adobeGreenH5 d-flex">
              <h5 className="h5Green ">Adobe</h5>
              <h5>: Creative, marketing and document management ...</h5>
            </div>
            <div className="adobeGreenP d-flex">
              <p>
                <span className="pGreen">Adobe is</span>
                <span className="ps-1">
                  changing the world Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Aspernatur asperiores eius ab repudiandae
                  sapiente laborum? Sit, officia voluptate?
                </span>
              </p>
            </div>
            <div className="buttonBox">
            <button>adobe</button>
            <button>design</button>
            <button>creative</button>
            <button>designer</button>
            <button>photoshop</button>
            <button>illustrator</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdobeChildRight;
