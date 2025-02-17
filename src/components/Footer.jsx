import { NavLink } from "react-router";
import Text from "./Text.jsx";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-950 text-orange-500 p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
      <NavLink to="/">
          <Text
            as="span"
            className="mr-4 cursor-pointer py-1.5 font-medium text-orange-500 text-xl font-bold"
          >
            StreamAIServ
          </Text>
        </NavLink>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Text
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Text>
          </li>
          <li>
            <Text
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Text>
          </li>
          <li>
            <Text
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Text>
          </li>
          <li>
            <Text
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Text>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Text color="blue-gray" className="text-center font-normal">
        &copy; 2025 StreamAIServ
      </Text>
    </footer>
  )
};

export default Footer;
