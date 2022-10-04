import React from "react";
import ContentLoader from "react-content-loader";
import classes from "./PictureGameOnHomePage.module.scss";

const PictureGameOnHomePage = (props) => (
   <ContentLoader
      className={classes.contentHomePage}
      speed={1}
      width={150}
      height={86}
      viewBox="0 0 150 86"
      backgroundColor="#404040"
      foregroundColor="#dbdbdb"
      {...props}
   >
      <rect x="0" y="0" rx="10" ry="10" width="150" height="86" />
   </ContentLoader>
);

export default PictureGameOnHomePage;
