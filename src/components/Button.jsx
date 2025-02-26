import { Button as MTBTN } from "@material-tailwind/react";
import clsx from "clsx";
import PropTypes from "prop-types";

const classes = (type) => {
  return clsx(
    type === "primary"
      ? "!bg-orange-600 !hover:bg-orange-400 rounded-xl text-white font-medium px-4 py-3 transition cursor-pointer"
      : "",
    type === "secondary"
      ? "bg-transparent rounded-xl text-white font-medium px-4 py-3 transition cursor-pointer border border-orange-500 focus:outline-none focus:ring-0"
      : "",
      type === "tertiary"
      ? "cursor-pointer px-2 py-2 hover:!bg-transparent rounded-none text-black transition cursor-pointer border-b-2 border-transparent hover:border-orange-500 focus:border-b-2 focus:border-orange-500 active:border-b-2 active:border-orange-500"
      : ""
  );
};

const variants = {
  primary: "filled",
  secondary: "outlined",
  tertiary: "text",
};

const MTButton = ({ children, type, size, onClick, disabled, fullWidth }) => {
  return (
    <MTBTN
      variant={`${variants[type]}`}
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

const SecondaryButton = ({ children, size, onClick, disabled, fullWidth }) => {
  // console.log("type is Primary");
  return (
    <MTButton
      type="secondary"
      size={size}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
    >
      {children}
    </MTButton>
  );
};
SecondaryButton.propTypes = MTButton.propTypes;
SecondaryButton.defaultProps = MTButton.defaultProps;

const TertiaryButton = ({ children, size, onClick, disabled, fullWidth }) => {
  // console.log("type is Primary");
  return (
    <MTButton
      type="tertiary"
      size={size}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
    >
      {children}
    </MTButton>
  );
};
TertiaryButton.propTypes = MTButton.propTypes;
TertiaryButton.defaultProps = MTButton.defaultProps;

const Button = {
  Primary: PrimaryButton,
  Secondary: SecondaryButton,
  Tertiary: TertiaryButton
};

Button.Primary = PrimaryButton;
Button.Secondary = SecondaryButton;
Button.Tertiary = TertiaryButton

export default Button;
