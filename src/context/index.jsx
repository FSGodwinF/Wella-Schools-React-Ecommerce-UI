/* eslint-disable react-refresh/only-export-components */
import PropTypes from 'prop-types';
import {useReducer, createContext} from 'react';

//initial state
const intialState = {
   cart:{}
};

const cartContext = createContext({});

function cartReducer(state, action){
   switch (action.type){
       case "ADD_TO_CART":{
        const item = state.cart[action.payload.id];
        return{
            ...state,
            cart: {
                ...state.cart,
                [action.payload.id]: item ? {
                    ...item,
                    qty: item.qty +1,
                } : {
                    ...action.payload,
                    qty:1,
                },
            },
        };
       }
           
       case "REMOVE_FROM_CART":{
        let newCart = {...state.cart};
        delete newCart[action.payload.id];
        return {
            ...state,
            cart: newCart,
        };
       }
       case "INCREMENT_QUANTITY":{
        const item = state.cart[action.payload.id];
        if (item) {
         return {
          ...state,
          cart: {
            ...state.cart,
            [action.payload.id]: {
              ...item,
              qty: item.qty + 1,
            },
          },
        };
      }
      return state;
       }
       case "DECREMENT_QUANTITY":{
        const item = state.cart[action.payload.id];
        if (item && item.qty > 1) {
         return {
          ...state,
          cart: {
            ...state.cart,
            [action.payload.id]: {
              ...item,
              qty: item.qty - 1,
            },
          },
        };
      }
      return state;
       }
          
       default:
           return state;
   }
}
// context provider

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, intialState);
    return (
      <cartContext.Provider value={{ state, dispatch }}>
        {children}
      </cartContext.Provider>
    );
  };
  Provider.propTypes = {
    children: PropTypes.node.isRequired,
  };
export { cartContext, Provider };