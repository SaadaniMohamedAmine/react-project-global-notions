import PropTypes from "prop-types";
import { IconButton } from "@material-tailwind/react";
import { Modal } from "../../components/Modal";

const serviceName = "login";

const LoginModal = ({ service, handleOpen }) => {
  console.log("Hello from the login modal");
  return (
    <Modal open={service === serviceName} handleOpen={handleOpen}>
      <Modal.Header>
        <div className="flex justify-between items-center">
          <h1 className="text-bold text-xl text-black">
            Hello from the login modal
          </h1>
          <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={handleOpen}
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
      </Modal.Header>
      <Modal.Body>
        <div className="mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
          aspernatur neque quas magni, obcaecati quaerat aliquam adipisci
          veniam? Ea, saepe. Ab rerum accusantium nam, dicta voluptatibus
          nostrum vitae id incidunt.
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div>I am the footer</div>
      </Modal.Footer>
    </Modal>
  );
};

LoginModal.propTypes = {
  service: PropTypes.string.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default LoginModal;
