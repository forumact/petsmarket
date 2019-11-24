import React from "react";
import HeadLine from "../components/HeadLine";

const NotFound = () => {
  const title = "404";
  return (
    <div>
      <HeadLine title={title}></HeadLine>
      <div className="section-wrap">
        <div className="section">
          <p>Sorry! The page your were looking Doesn't exists.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
