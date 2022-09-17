import React from "react";
import "./adobeChildLeft.scss";
import { RiArrowUpSLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

const AdobeChildLeftOne = () => {
  return (
    <div className="adobeChildLeft">
      <div className="d-flex">
        <div className="col-lg-11">
          <h6>Company Sectors</h6>
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
          Administrative
        </h6>
        <h6 className="checked">
          <ImCheckboxChecked className="checkedBox grCheckboxSelected" />
          Arts & Design
        </h6>
        <h6 className="checked">
          <ImCheckboxUnchecked className="checkedBox" />
          Businesa
        </h6>
        <h6 className="checked">
          <ImCheckboxUnchecked className="checkedBox" />
          Consulting
        </h6>
        <h6 className="checked">
          <ImCheckboxUnchecked className="checkedBox" />
          Customer Services & Support
        </h6>
        <hr />
      </div>
    </div>
  );
};

export default AdobeChildLeftOne;
