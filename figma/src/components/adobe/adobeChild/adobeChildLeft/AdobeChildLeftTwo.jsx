import React from "react";
import "./adobeChildLeft.scss";
import { RiArrowUpSLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

const AdobeChildLeftTwo = () => {
  return (
    <div className="adobeChildLeft">
      <div className="d-flex">
        <div className="col-lg-11">
          <h6>Country</h6>
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
          Worldwide
        </h6>
        <h6 className="checked">
          <ImCheckboxChecked className="checkedBox grCheckboxSelected" />
          United States
        </h6>
        <h6 className="checked">
          <ImCheckboxUnchecked className="checkedBox" />
          Azerbaijan
        </h6>
        <h6 className="checked">
          <ImCheckboxUnchecked className="checkedBox" />
          Russia
        </h6>
        <h6 className="checked">
          <ImCheckboxUnchecked className="checkedBox" />
          Turkey
        </h6>
        <hr />
      </div>
    </div>
  );
};

export default AdobeChildLeftTwo;
