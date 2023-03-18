import React from "react";

const Content = ({ isDark }) => {
  return (
    <header
      className="header"
      style={{
        background: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>Welcome 김현성!</h1>
    </header>
  );
};

export default Content;
