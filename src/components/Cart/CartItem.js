import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { title, quantity, totalPrice, price,id } = props.item;

  const dispatch=useDispatch()
  const plusButton=()=>{
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price,
    }))
  }
  const minusButton=()=>{
    dispatch(cartActions.removeItemFromCart(id))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={minusButton}>-</button>
          <button onClick={plusButton}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
