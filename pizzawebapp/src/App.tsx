import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllOrders from "./components/AllOrders";
import Carts from "./components/Carts";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carts" element={<Carts />} />
          <Route path="/allorders" element={<AllOrders />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
