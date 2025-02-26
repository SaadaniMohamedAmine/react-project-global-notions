import { Select as MTSelect, Option } from "@material-tailwind/react";
import PropTypes from "prop-types";

const Select = ({ data, size, label, className, onChange }) => {
  const handleSelect = (value) => {
    onChange(value);
  };
  return (
    <MTSelect
      size={size}
      label={label}
      className={className}
      selected={(element) => (
        element,
        (<span className="flex items-center px-0 gap-2">{element}</span>)
      )}
      onChange={handleSelect}
    >
      {data.map((item) => (
        <Option
          key={item.name}
          className="flex justify-between items-center"
          value={item.name}
        >
          <img
            src={item.flags.svg}
            alt={item.name}
            className="h-5 w-5 rounded-full object-cover mr-3"
          />
          <span>{item.name}</span>
        </Option>
      ))}
    </MTSelect>
  );
};

Select.propTypes = {
  data: PropTypes.array.isRequired,
  size: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

export default Select;
