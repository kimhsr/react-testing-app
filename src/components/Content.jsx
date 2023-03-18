import React from "react";

const Content = ({ isDark }) => {
  return (
    <header
      className="content"
      style={{
        background: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>김현성님, 좋은 하루 되세요</h1>
    </header>
  );
};

export default Content;
