import { useReducer } from "react";
import CartContext from "./cart-context";

// const cartReducer = (lastStateSnapShot, action) => {};
const initialState = { items: [], totalAmount: 0 };
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    // console.log(state.totalAmount, action.item.price, action.amount);

    const existingCartItem = state.items[existingCartItemIndex];
    //console.log(existingCartItem, existingCartItemIndex); // the current item and the quantity being added
    //
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      //   overwriting the previous item with the current one
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      //   updatedItem = { ...action.item };
      updatedItems = state.items.concat(action.item);
    }
    // console.log(updateTotalAmount);
    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartitemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    // console.log(existingCartitemIndex);
    const existingItem = state.items[existingCartitemIndex];
    const updateTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartitemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
  }
  if (action.type === "CLEAR") {
    return initialState;
  }

  return initialState;
};
function CartProvider({ children }) {
  const [curState, dispatch] = useReducer(cartReducer, initialState);
  const { items, totalAmount } = curState;

  //   console.log(items, totalAmount);

  const addItemToCartHandler = (item) => {
    dispatch({ type: "ADD", item });
    // console.log(item);
  };
  const removeItemFromCartHandler = (id) => {
    dispatch({ type: "REMOVE", id });
  };
  const clearFormCartHandler = () => {
    dispatch({ type: "CLEAR" });
  };
  const cartContextValues = {
    items,
    totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearForm: clearFormCartHandler,
  };
  return (
    <CartContext.Provider value={cartContextValues}>
      {children}
      <p>
        providing exceptional technology services to both the private and public
        sectors
      </p>
    </CartContext.Provider>
  );
}

export default CartProvider;
