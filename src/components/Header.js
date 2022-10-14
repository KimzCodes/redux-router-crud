import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h1>CRUD APP</h1>
      <ul className="nav">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Add Post</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
