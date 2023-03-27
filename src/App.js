import "./App.css";
import Home from "./Component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Component/Product";
import SingalProduct from "./Component/SingalProduct";
import Register from "./Component/Register";
import Header from "./Component/Header";
import Login from "./Component/Login";
import FournotFour from "./Component/FournotFour";


function App() {
  return (
    <>
   
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="*" element={<FournotFour />} />
          <Route exact path="/register" element={<><Header/><Register /></>} />
          <Route exact path="/login" element={<><Header/><Login/></>} />
          <Route exact path="/product" element={<Product/>} />
          <Route exact path="/product/:id" element={<SingalProduct/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
