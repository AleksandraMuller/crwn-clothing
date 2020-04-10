import React from "react";
import { MenuItem } from "./../menu-item/MenuItem";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import "./directory.styles.scss";

export const Directory = () => {
  const selectors = useSelector(
    createStructuredSelector({
      sections: selectDirectorySections
    })
  );
  return (
    <div className="directory-menu">
      {selectors.sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};
