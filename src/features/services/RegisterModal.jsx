import { useState } from "react";
import { Modal } from "../../components/Modal.jsx";
import PropTypes from "prop-types";
import { IconButton } from "@material-tailwind/react";
import { useCountries } from "use-react-countries";
import Select from "../../components/Select.jsx";
import Text from "../../components/Text.jsx";


const serviceName = "register";

const RegisterModal = ({ service, handleOpen }) => {
  const { countries } = useCountries();
  const [selectedCountry, setSelectedCountry] = useState("");
  const handleSelectCountry = (value) => {
    setSelectedCountry(value);
    console.log("Selected Country:", selectedCountry);
  };
  return (
    <Modal open={service === serviceName} handleOpen={handleOpen} size="xs">
      <Modal.Body>
        <div className="mx-auto w-full max-w-[24rem]">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center w-full">
              <Text variant="h4" color="blue-gray">
                Sign Up
              </Text>
              <IconButton
                color="orange"
                size="sm"
                variant="text"
                onClick={handleOpen}
                className="cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>
            </div>
            <div className="my-5">
              <Text variant="h6" color="blue-gray" className="my-3">
                Please select your country
              </Text>
              <Select
                size="lg"
                label="Country"
                data={countries}
                className="cursor-pointer"
                onChange={handleSelectCountry}
              />
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

RegisterModal.propTypes = {
  service: PropTypes.string.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default RegisterModal;
