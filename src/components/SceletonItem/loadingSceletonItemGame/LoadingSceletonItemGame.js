import React from "react";
import ContentLoader from "react-content-loader";
import classes from "./LoadingSceletonItemGame.module.scss";

const LoadingSceletonItemGame = (props) => (
   <ContentLoader
      className={classes.conteiner__game}
      speed={1}
      width={389}
      height={499}
      viewBox="0 0 389 499"
      backgroundColor="#404040"
      foregroundColor="#dbdbdb"
      {...props}
   >
      <rect x="0" y="0" rx="10" ry="10" width="385" height="229" />
      <rect x="0" y="285" rx="10" ry="10" width="62" height="20" />
      <rect x="80" y="285" rx="10" ry="10" width="120" height="20" />
      <rect x="218" y="285" rx="10" ry="10" width="109" height="20" />
      <rect x="10" y="328" rx="10" ry="10" width="365" height="125" />
      <rect x="232" y="460" rx="25" ry="25" width="153" height="38" />
      <rect x="0" y="249" rx="10" ry="10" width="180" height="24" />
   </ContentLoader>
);

export default LoadingSceletonItemGame;
