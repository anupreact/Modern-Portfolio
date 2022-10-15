import { Button, Result } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <NavLink to="home">
            <Button type="primary">Back Home</Button>
          </NavLink>
        }
      />
    </div>
  );
};

export default NotFound;
