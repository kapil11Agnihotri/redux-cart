import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { fetchCartData, sendCartData } from "./components/store/cart-actions";
import Notification from "./components/UI/Notification";

let isInitial=true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const quantity=useSelector(state=>state.cart.totalQuantity)
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  //  const onAdd=useSelector(state=>state.cart.onAdd)
  
  
useEffect(()=>{
  dispatch(fetchCartData())
},[dispatch])
//dispatch(fetchCartData())

  useEffect(() => {
    if(isInitial){
      isInitial=false
      return;
    }
    if(cart.changed){
      dispatch(sendCartData(cart))
    }
   
  }, [cart,dispatch]);
  

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
