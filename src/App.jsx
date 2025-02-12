import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./features/Home";
import Docs from "./features/docs";
import ModalContainer from "./features/services";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ModalContainer />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
