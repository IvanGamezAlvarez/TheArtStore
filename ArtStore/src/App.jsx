import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import Catalog from "./Components/Catalog";
import Paint from "./Components/Paint";
import Error from "./Components/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/Catalog" element={<Catalog />}></Route>
            <Route path="/Catalog/:id" element={<Paint />}></Route>
            <Route path="/*" element={<Error />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
