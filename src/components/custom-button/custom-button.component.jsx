import React from "react";

import "./custom-button.styles.scss";

// the className is basically setted to 'custom-button' that is also always rendered
// but if the props 'isGoogleSignIn' is present is also rendered 'google-sgn-in'
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
