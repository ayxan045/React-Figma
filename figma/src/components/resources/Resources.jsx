import React from 'react'
import { FaSearch } from "react-icons/fa";

const Resources = () => {
  return (
    <div className="resourcesInput">
    <button className="btnSearch">
    <select name="filterResources" className="filterResources">
      <option value="resources">Resources</option>
      <option value="onlyDomain">Only Domain</option>
      <option value="otherOptions">Other Options</option>
    </select>
    <input
      className="filterInput"
      type="search"
      placeholder="Search something..."
    />
      <FaSearch className='faSearch' />
    </button>
  </div>
  )
}

export default Resources