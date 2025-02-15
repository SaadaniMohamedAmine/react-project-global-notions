import { Checkbox as MTCheckbox } from "@material-tailwind/react";
import PropTypes from "prop-types";

const Checkbox = ({ color, label, isChecked, onChange }) => {
  return (
    <MTCheckbox
      color={color}
      label={label}
      checked={isChecked}
      onChange={onChange}
      defaultChecked={false}
    />
  );
};

Checkbox.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
};
export default Checkbox;
