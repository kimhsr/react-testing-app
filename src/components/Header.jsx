import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";

const Content = () => {
  const { isDark } = useContext(ThemeContext);
  const user = useContext(UserContext);
  console.log(user);
  return (
    <header
      className="header"
      style={{
        background: isDark ? "black" : "lightgray",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>Welcome {user}!</h1>
    </header>
  );
};

export default Content;
