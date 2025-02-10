import { Button as MTBTN } from "@material-tailwind/react";
import clsx from "clsx";
import PropTypes from "prop-types";

const classes = (type) => {
  return clsx(
    type === "primary"
      ? "!bg-orange-600 rounded-xl text-white font-medium px-4 py-3 transition cursor-pointer"
      : ""
  );
};

const MTButton = ({ children, type, size, onClick, disabled, fullWidth }) => {
  return (
    <MTBTN
      variant="filled"
      size={size}
      onClick={onClick}
      className={`${classes(type)}`}
      disabled={disabled}
      fullWidth={fullWidth}
    >
      {children}
    </MTBTN>
  );
};

MTButton.defaultProps = {
  disabled: false,
  onClick: Function.prototype,
  size: "md",
  fullWidth: false,
};

MTButton.propTypes = {
  children: PropTypes.element.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

const PrimaryButton = ({ children, size, onClick, disabled, fullWidth }) => {
  // console.log("type is Primary");
  return (
    <MTButton
      type="primary"
      size={size}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
    >
      {children}
    </MTButton>
  );
};
PrimaryButton.propTypes = MTButton.propTypes;
PrimaryButton.defaultProps = MTButton.defaultProps;

const Button = {
  Primary: PrimaryButton,
};

Button.Primary = PrimaryButton;

export default Button;
