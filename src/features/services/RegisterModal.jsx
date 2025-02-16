import { Modal } from "../../components/Modal.jsx";
import PropTypes from "prop-types";
import { IconButton, Typography } from "@material-tailwind/react";


const serviceName = "register";

const RegisterModal = ({ service, handleOpen }) => {
  return (
    <Modal open={service === serviceName} handleOpen={handleOpen} size="xs">
      <Modal.Body>
        <div className="mx-auto w-full max-w-[24rem]">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center w-full">
              <Typography variant="h4" color="blue-gray">
                Sign Up
              </Typography>
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
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              obcaecati voluptate? Dolore, impedit culpa. Dolore, nulla
              accusamus quasi, incidunt alias impedit quis nisi enim, dolorem
              explicabo rerum eum voluptatibus magnam.
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
