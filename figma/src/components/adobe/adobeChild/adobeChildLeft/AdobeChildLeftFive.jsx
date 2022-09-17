import React from "react";
import "./adobeChildLeft.scss";
import { RiArrowUpSLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

const AdobeChildLeftFive = () => {
  return (
    <div className="adobeChildLeft">
      <div className="d-flex">
        <div className="col-lg-11">
          <h6>Colors</h6>
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
          Green
        </h6>
        <h6 className="checked">
          <ImCheckboxChecked className="checkedBox grCheckboxSelected" />
          Red
        </h6>
        <h6 className="checked">
          <ImCheckboxUnchecked className="checkedBox" />
          Yellow
        </h6>
        <h6 className="checked">
          <ImCheckboxUnchecked className="checkedBox" />
          Blue
        </h6>
        <h6 className="checked">
          <ImCheckboxUnchecked className="checkedBox" />
          White
        </h6>
      </div>
    </div>
  );
};

export default AdobeChildLeftFive;
