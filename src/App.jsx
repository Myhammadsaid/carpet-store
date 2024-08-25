import { Route, Routes } from "react-router-dom";
import SingleRoute from "./pages/single-route/SingleRoute";
import Layout from "./pages/layout/Layout";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Wishlist from "./pages/wishlist/Wishlist";
import Dekor from "./pages/dekor/Dekor";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products/:id" element={<SingleRoute />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/dekor" element={<Dekor />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
