import React from "react";
import AdobeChildLeftOne from "./adobeChildLeft/AdobeChildLeftOne";
import AdobeChildRight from "./adobeChildRight/AdobeChildRight";
import "./adobeChild.scss";
import AdobeChildLeftTwo from "./adobeChildLeft/AdobeChildLeftTwo";
import AdobeChildLeftThree from "./adobeChildLeft/AdobeChildLeftThree";
import AdobeChildLeftFour from "./adobeChildLeft/AdobeChildLeftFour";
import AdobeChildLeftFive from "./adobeChildLeft/AdobeChildLeftFive";
import { RiArrowDownSLine } from "react-icons/ri";

const AdobeChild = () => {
  return (
    <div className="adobeChild">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h6 className="h6Filters">FILTERS</h6>
            <AdobeChildLeftOne />
            <AdobeChildLeftTwo />
            <AdobeChildLeftThree />
            <AdobeChildLeftFour />
            <AdobeChildLeftFive />
          </div>
          <div className="col-lg-9">
            <div className="adobeChildRightTopText">
              <div className="d-flex">
                <div className="col-lg-10">
                  <h6>Showing: 599 filtered domains</h6>
                </div>
                <div className="col-lg-2">
                  <h6>
                    Sort by:
                    <span>
                      <u>Relevance</u>
                    </span>
                    <RiArrowDownSLine />
                  </h6>
                </div>
              </div>
            </div>
            <AdobeChildRight />
            <AdobeChildRight />
            <AdobeChildRight />
            <AdobeChildRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdobeChild;
