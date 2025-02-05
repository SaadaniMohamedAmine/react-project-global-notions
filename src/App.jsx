import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./features/Home";
import Docs from "./features/docs";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
