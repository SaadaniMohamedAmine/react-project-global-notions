import { BrowserRouter, Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import Home from "./features/Home";
import Docs from "./features/docs";
import ModalContainer from "./features/services";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ModalContainer />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
