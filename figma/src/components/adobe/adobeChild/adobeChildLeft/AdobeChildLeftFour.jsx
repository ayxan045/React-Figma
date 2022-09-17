import React from "react";
import "./adobeChildLeft.scss";
import { RiArrowUpSLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

const AdobeChildLeftFour = () => {
  return (
    <div className="adobeChildLeft">
      <div className="d-flex">
        <div className="col-lg-11">
          <h6>Alexa points</h6>
        </div>
        <div className="col-lg-1">
          <RiArrowUpSLine />
        </div>
      </div>
      <button className="btnSearch">
        <FaSearch className="faSearch" />
        <input type="search" placeholder="Search sector" />
      </button>
      <div className="check">
        <h6 className="checked">
          <ImCheckboxUnchecked className="checkedBox" />
          5 star
        </h6>
        <h6 className="checked">
          <ImCheckboxChecked className="checkedBox grCheckboxSelected" />
          4 star
        </h6>
        <h6 className="checked">
          <ImCheckboxUnchecked className="checkedBox" />
          3 star
        </h6>
        <h6 className="checked">
          <ImCheckboxUnchecked className="checkedBox" />
          2 star
        </h6>
        <h6 className="checked">
          <ImCheckboxUnchecked className="checkedBox" />
          1 star
        </h6>
        <hr />
      </div>
    </div>
  );
};

export default AdobeChildLeftFour;
