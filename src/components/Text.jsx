import { Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";

const Text = ({ children, variant, color, textGradient }) => {
  return (
    <Typography variant={variant} color={color} textGradient={textGradient}>
      {children}
    </Typography>
  );
};

Text.defaultProps = {
  textGradient: false,
  variant: "paragraph",
  color: "",
};
Text.propTypes = {
  children: PropTypes.element,
  textGradient: PropTypes.bool,
  color: PropTypes.string,
  variant: PropTypes.string,
};

export default Text;
