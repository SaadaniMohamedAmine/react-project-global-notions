import PropTypes from "prop-types";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
