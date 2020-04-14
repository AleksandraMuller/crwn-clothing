import React from "react";

import { Directory } from "./../../components/directory/Directory";

import "./homepage.styles.scss";
import { HomepageContainer } from "./homepage.styles.js";

export const Homepage = () => {
  return (
    <HomepageContainer>
      <Directory />
    </HomepageContainer>
  );
};
