import { NavLink, useNavigate } from "react-router";
import { Navbar,  } from "@material-tailwind/react";
import Button from "./Button";
import Text from "./Text.jsx";

const Header = () => {
  // const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const openLoginModal = () => {
    navigate("/?service=login");
  };
  const openRegisterModal = () => {
    navigate("/?service=register");
  };

  return (
    <Navbar
      className="px-4 py-2 lg:px-8 lg:py-4 w-full navbar-width bg-neutral-950 border-none text-white"
      fullWidth
    >
      <div className="flex items-center justify-between text-white">
        <NavLink to="/">
          <Text
            as="span"
            className="mr-4 cursor-pointer py-1.5 font-medium text-orange-500 text-xl font-bold"
          >
            StreamAIServ
          </Text>
        </NavLink>
        <div className="flex gap-5">
          <Button.Primary onClick={openLoginModal}>Sign In</Button.Primary>
          <Button.Secondary onClick={openRegisterModal}>
            Join Us
          </Button.Secondary>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
