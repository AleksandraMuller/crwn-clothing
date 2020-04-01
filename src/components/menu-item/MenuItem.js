import React from "react";
import { useHistory } from "react-router-dom";
// import { withRouter } from "react-router-dom";
//withRouter takes a component as an argument and returns a modified component
//it is like a function that returns a powered up component

import "./menu-item.styles.scss";

export const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  let history = useHistory();

  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`/${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

// export default withRouter(MenuItem);
