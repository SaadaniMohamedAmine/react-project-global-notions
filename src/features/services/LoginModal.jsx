import { useState } from "react";
import PropTypes from "prop-types";
import { IconButton, Typography } from "@material-tailwind/react";
import { Modal } from "../../components/Modal";
import Input from "../../components/Input.jsx";
import Button from "../../components/Button.jsx";
import Checkbox from "../../components/checkbox.jsx";
import Switch from "../../components/Switch.jsx";

const serviceName = "login";

const LoginModal = ({ service, handleOpen }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = (e) => {
    setIsChecked(e.target.checked);
  };
  const [toggle, setToggle] = useState(false);
  const handleToggle = (e) => {
    setToggle(e.target.checked);
    console.log("Switch state:", e.target.checked);
  };

  return (
    <Modal open={service === serviceName} handleOpen={handleOpen} size="xs">
      <Modal.Body>
        <div className="mx-auto w-full max-w-[24rem]">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center w-full">
              <Typography variant="h4" color="blue-gray">
                Sign In
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
              <Typography className="my-2" variant="h6">
                Your Email
              </Typography>
              <Input label="Email" size="lg" />
              <Typography className="my-2" variant="h6">
                Your Password
              </Typography>
              <Input label="Password" size="lg" />
            </div>
            <div className="-ml-2.5 -mt-3">
              <Checkbox
                color="orange"
                label="Remember Me"
                checked={isChecked}
                onChange={handleCheck}
                defaultChecked={false}
              />
              <div className="p-5 my-3">
                <Switch
                  label="Automatic Update"
                  color="orange"
                  checked={toggle}
                  onChange={handleToggle}
                  className="bg-orange-300"
                />
              </div>
            </div>
          </div>
          <div className="pt-0">
            <Button.Primary variant="gradient" onClick={handleOpen} fullWidth>
              Sign In
            </Button.Primary>
            <Typography variant="small" className="mt-4 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                onClick={handleOpen}
              >
                Sign up
              </Typography>
            </Typography>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

LoginModal.propTypes = {
  service: PropTypes.string.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default LoginModal;
