import { Switch as MtSwitch } from "@material-tailwind/react";
import PropTypes from "prop-types";

const Switch = ({ color, label, isChecked, onChange, className }) => {
  return (
    <MtSwitch
      color={color}
      label={label}
      checked={isChecked}
      onChange={onChange}
      defaultChecked={false}
      className={className}
    />
  );
};

Switch.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Switch;
