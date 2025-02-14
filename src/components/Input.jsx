import PropTypes from "prop-types";
import { Input as MTInput } from "@material-tailwind/react";

const Input = ({ label, size }) => {
  return (
    <MTInput
      label={label}
      size={size}
      color="orange"
      className="border !border-orange-500 focus:!outline-0 focus:!border-t-0"
    />
  );
};

Input.defaultProps = {
  size: "md",
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default Input;
