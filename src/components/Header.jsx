import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { Navbar, Typography, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Button from "./Button";

const Header = () => {
  // const [openMenu, setOpenMenu] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();
  const openLoginModal = () => {
    navigate("/?service=login")
  };

  return (
    <Navbar
      className="px-4 py-2 lg:px-8 lg:py-4 w-full navbar-width bg-neutral-950 border-none text-white"
      fullWidth
    >
      <div className="flex items-center justify-between text-white">
        <NavLink to="/">
          <Typography
            as="span"
            className="mr-4 cursor-pointer py-1.5 font-medium text-orange-500 text-xl font-bold"
          >
            StreamAIServ
          </Typography>
        </NavLink>
        <div className="flex gap-5">
          <Button.Primary onClick={openLoginModal}>Sign In</Button.Primary>
          <Button.Secondary>Join Us</Button.Secondary>
        </div>
        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
    </Navbar>
  );
};

export default Header;
