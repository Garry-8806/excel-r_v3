import axios from 'axios';
import { 
  CART_ADD_ITEM, 
  CART_REMOVE_ITEM 
} from '../constants/cartConstants';

// Add to cart action
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty
    }
  });

  // Save cart items to localStorage
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

// Remove from cart action
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id
  });

  // Save cart items to localStorage
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
