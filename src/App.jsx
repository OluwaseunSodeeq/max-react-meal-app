import { Fragment, useState } from "react";
import Header from "../src/Components/Layout/Header";
import Meals from "./Components/meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => setCartIsShown(!cartIsShown);
  return (
    <Fragment>
      {cartIsShown && <Cart />}
      <Header onshowCartHandler={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
