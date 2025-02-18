import PropTypes from "prop-types";
import { Input as MTInput } from "@material-tailwind/react";

const Input = ({ label, size, value, onChange, type, success, error, rest, id }) => {
  return (
    <MTInput
      label={label}
      size={size}
      type={type}
      name={id}
      value={value}
      onChange={onChange}
      success={success}
      error={error}
      color="orange"
      {...rest}
      className="border !border-orange-500 focus:!outline-0 focus:!border-t-0"
    />
  );
};

Input.defaultProps = {
  size: "md",
  value: "",
  onChange: Function.prototype,
  type: "text",
  success: false,
  error: false,
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  success: PropTypes.bool,
  error: PropTypes.bool,
  rest: PropTypes.element,
  id: PropTypes.string
};

export default Input;
