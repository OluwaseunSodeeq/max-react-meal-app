import { useState } from "react";
import Header from "../src/Components/Layout/Header";
import Meals from "./Components/meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    // console.log("clicked!");
    setCartIsShown(!cartIsShown);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onshowCartHandler={showCartHandler} />}
      <Header onshowCartHandler={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
