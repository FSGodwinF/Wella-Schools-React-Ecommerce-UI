import { useContext } from "react";
import { cartContext } from "../context";
import CartCard from "../components/CartCard";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const Cart = () => {
  const { state, dispatch } = useContext(cartContext);
  const { cart } = state;


  const cartItems = Object.values(cart);

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  const handleIncrement = (id) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: { id } });
  };

  const handleDecrement = (id) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: { id } });
  };
  
  return (
    <div className="container py-4">
    <p className="text-center mb-4"><ShoppingCartIcon style={{fontSize:"50px"}}/></p>
    {cartItems.length > 0 ? (
      <div className="row">
        {cartItems.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-4 mb-3">
              <CartCard
                item={item}
                onRemove={handleRemove}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
              />
            </div>
        ))}
      </div>
    ) : (
      <h5 className="text-center">Your cart is empty. A little retail therapy might fix that! </h5>
    )}
    {cartItems.length>0 &&(
      <div className="d-flex">
        <button className="btn btn-success ms-auto" onClick={()=>console.log("Items in Cart:",cart)}>
         CHECKOUT
        </button>
      </div>
    )}
    
  </div>
);
  
}

export default Cart