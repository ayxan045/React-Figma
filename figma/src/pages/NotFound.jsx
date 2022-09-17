import React from "react";
import { Link } from "react-router-dom";
import Error from "../img/404Error.jpg";

const NotFound = () => {
  return (
    <div>
      <button
        style={{
          position: "absolute",
          zIndex: "110",
          width: "100%",
          top: "0",
          padding: "16px",
        }}
        className="btn btn-primary"
      >
        <Link style={{ color: "white" , fontWeight:"700" ,fontSize:"30px"}} to="/">
          Go Home
        </Link>
      </button>
      <img
        style={{
          width: "100%",
          height: "91vh",
          position: "absolute",
          zIndex: "100",
        }}
        src={Error}
        alt=""
      />
    </div>
  );
};

export default NotFound;
