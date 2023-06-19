import {useMemo, useState} from "react";
import styles from './burger-constructor.module.css';
import ConstructorCard from "./constructor-card/constructor-card";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "./order-details/order-details";
import {useDispatch, useSelector} from "react-redux";
import ConstructorBun from "./constructor-card/constructor-bun";
import {useDrop} from "react-dnd";
import {CART_BUN_SET, CART_ITEM_ADD} from "../../services/actions/cart";

function BurgerConstructor() {
  const [isOrderModalOpen, setOrderModalOpen] = useState(false);
  const cartItems = useSelector(store => store.cart.cartItems);
  const cartBun = useSelector(store => store.cart.cartBun);
  const dispatch = useDispatch();

  const [, dropRef] = useDrop({
    accept: 'ingredient',
    drop(item) {
      const ingredient = item.ingredient;
      if (ingredient.type === 'bun') {
        dispatch({type: CART_BUN_SET, bun: ingredient})
      } else {
        dispatch({type: CART_ITEM_ADD, item: ingredient});
      }
    }
  })

  function onModalOpen() {
    setOrderModalOpen(true);
  }

  function onModalClose() {
    setOrderModalOpen(false);
  }

  const totalPrice = useMemo(() => {
    const bunPrice = cartBun ? cartBun.price * 2 : 0;
    return bunPrice + cartItems.reduce((acc, item) => acc + item.price, 0)
  }, [cartItems, cartBun]);

  return (
    <>
      <div className={`pl-4 pt-25 pr-4 ${styles.root}`} ref={dropRef}>
        <ConstructorBun type='top' />
        {cartItems.map((item) => {
          return <ConstructorCard key={item.key} item={item} />
        })}
        <ConstructorBun type='bottom' />

        <footer className={`mt-10 ${styles.footer}`}>
          <div className="mr-10">
            <span className="text text_type_digits-medium mr-2">{totalPrice}</span>
            <CurrencyIcon type="primary" />
          </div>
          <Button
            type="primary"
            htmlType="button"
            size="large"
            onClick={onModalOpen}
            disabled={!cartBun}
          >Оформить заказ</Button>
        </footer>
      </div>
      {isOrderModalOpen && (
        <OrderDetails onClose={onModalClose} />
      )}
    </>
  )
}

export default BurgerConstructor;