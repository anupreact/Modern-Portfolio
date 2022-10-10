import React, { useEffect, useRef, useState } from "react";
import "./LoaderLogo.css";

const LogoLoader = () => {
  const intervalRef = useRef();

  const [count, setCount] = useState(10);

  const [loader, setLoader] = useState(1);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prevTimer) => prevTimer + 10);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  if (count === 100) {
    setLoader(false);
    clearInterval(intervalRef.current);
  }

  return (
    <>
      {/* {loader ? (
        <div className="raw_logo">
          <div ref={intervalRef}> {count} % </div> <br />
          <div>
            <button onClick={() => clearInterval(intervalRef.current)}>
              Clear Interval
            </button>
          </div>
        </div>
      ) : (
        " new component"
      )} */}

      <div className="raw_logo">
        <h1>hello loader</h1>
      </div>
    </>
  );
};

export default LogoLoader;
