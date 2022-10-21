import { Button, Result } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import error from "../images/error.gif";

const NotFound = () => {
  return (
    <div className="Error-container">
      <div className="error">
        <img src={error} alt="" />
      </div>
      <span>404</span> <br />
      <span>
        Sorry The Page you are trying to Access is either unavailable or nit
        found
      </span>
      <NavLink to="/">
        <button>Go Back</button>
      </NavLink>
      {/* <Result
        className="error"
        status="404"
        // title="404"
        title={<h1 style={{ color: "white" }}> 404 </h1>}
        // subTitle="Sorry, the page you visited does not exist."
        subTitle={
          <p style={{ color: "white" , fontSize:"1.3rem"}}>
            {" "}
            Sorry, the page you visited does not exist.
          </p>
        }
        extra={
          <NavLink to="home">
            <Button type="primary">Back Home</Button>
          </NavLink>
        }
      /> */}
    </div>
  );
};

export default NotFound;
