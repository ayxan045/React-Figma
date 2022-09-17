import React from "react";
import "./adobeChildLeft.scss";
import { RiArrowUpSLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

const AdobeChildLeftThree = () => {
  return (
    <div className="adobeChildLeft">
      <div className="d-flex">
        <div className="col-lg-11">
          <h6>Metatags</h6>
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
          Metatag 1
        </h6>
        <h6 className="checked">
          <ImCheckboxChecked className="checkedBox grCheckboxSelected" />
          Metatag 2
        </h6>
        <h6 className="checked">
          <ImCheckboxUnchecked className="checkedBox" />
          Metatag 3
        </h6>
        <h6 className="checked">
          <ImCheckboxUnchecked className="checkedBox" />
          Metatag 4
        </h6>
        <h6 className="checked">
          <ImCheckboxUnchecked className="checkedBox" />
          Metatag 5
        </h6>
        <hr />
      </div>
    </div>
  );
};

export default AdobeChildLeftThree;
