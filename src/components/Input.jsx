// import PropTypes from "prop-types";
import { Input as MTInput } from "@material-tailwind/react";

const Input = () => {
  return (
    <MTInput
      label="Email"
      color="orange"
      className="border !border-orange-500 focus:!outline-0 focus:!border-t-0"
    />
  );
};

export default Input;
