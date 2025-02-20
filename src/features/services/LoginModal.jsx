import { useState } from "react";
import PropTypes from "prop-types";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import { IconButton } from "@material-tailwind/react";
import { Modal } from "../../components/Modal";
import Input from "../../components/Input.jsx";
import Button from "../../components/Button.jsx";
import Checkbox from "../../components/checkbox.jsx";
// import Switch from "../../components/Switch.jsx";
import Text from "../../components/Text.jsx";
import loginSchema from "../../schemas/loginSchema.jsx";
import { showToast } from "../../helper.jsx";

const serviceName = "login";

const LoginModal = ({ service, handleOpen }) => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleSubmitLogin = (data) => {
    console.log("The login data is", data);
    reset();
    showToast(
      "Welcome in StreamAIServ !",
      "Hello Mohamed ! Happy you get here !",
      "success"
    );
    handleOpen();
  };

  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = (e) => {
    setIsChecked(e.target.checked);
  };

  // const [toggle, setToggle] = useState(false);
  // const handleToggle = (e) => {
  //   setToggle(e.target.checked);
  //   console.log("Switch state:", e.target.checked);
  // };

  const navigateToRegisterModal = () => {
    navigate("/?service=register");
  };

  return (
    <Modal open={service === serviceName} handleOpen={handleOpen} size="xs">
      <Modal.Body>
        <div className="mx-auto w-full max-w-[24rem]">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center w-full">
              <Text variant="h4" color="blue-gray">
                Sign In
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
            <div>
              <Text className="my-2" variant="h6">
                Your Email
              </Text>
              <Controller
                control={control}
                name="email"
                render={({ field, formState }) => (
                  <Input
                    label="Email"
                    size="lg"
                    type="email"
                    id="email"
                    name="email"
                    {...field}
                    error={formState?.email}
                  />
                )}
              />
              <p className="text-red-500 text-xs">{errors.email?.message}</p>
              <Text className="my-2" variant="h6">
                Your Password
              </Text>
              <Controller
                control={control}
                name="password"
                render={({ field, formState }) => (
                  <Input
                    label="Password"
                    size="lg"
                    type="password"
                    id="password"
                    name="password"
                    {...field}
                    error={formState.password?.message}
                  />
                )}
              />
              <p className="text-red-500 text-xs">{errors.password?.message}</p>
            </div>
            <div className="-ml-2.5 -mt-3">
              <Checkbox
                color="orange"
                label="Remember Me"
                checked={isChecked}
                onChange={handleCheck}
                defaultChecked={false}
              />
              {/* <div className="p-5 my-3">
                <Switch
                  label="Automatic Update"
                  color="orange"
                  checked={toggle}
                  onChange={handleToggle}
                  className="bg-orange-300"
                />
              </div> */}
            </div>
          </div>
          <div className="pt-0 mt-5">
            <Button.Primary
              variant="gradient"
              onClick={handleSubmit(handleSubmitLogin)}
              fullWidth
            >
              Sign In
            </Button.Primary>
            <div className="my-4 flex justify-center items-center gap-1 text-black">
              <span>Don&apos;t have an account?</span>
              <Button.Tertiary onClick={navigateToRegisterModal}>
                <span className="text-orange-500"> Sign Up</span>
              </Button.Tertiary>
            </div>
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
