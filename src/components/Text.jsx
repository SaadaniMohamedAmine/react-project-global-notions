import { Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";

const Text = ({ children, variant, color, textGradient, className }) => {
  return (
    <Typography
      variant={variant}
      color={color}
      textGradient={textGradient}
      className={className}
    >
      {children}
    </Typography>
  );
};

Text.defaultProps = {
  textGradient: false,
  variant: "paragraph",
  color: "",
  className: ""
};
Text.propTypes = {
  children: PropTypes.element,
  textGradient: PropTypes.bool,
  color: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
};

export default Text;
