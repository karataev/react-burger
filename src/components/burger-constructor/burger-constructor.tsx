import {JSX, useMemo, useState} from "react";
import styles from './burger-constructor.module.css';
import ConstructorCard from "./constructor-card/constructor-card";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "./order-details/order-details";
import ConstructorBun from "./constructor-card/constructor-bun";
import {useDrop} from "react-dnd";
import {CART_BUN_SET, CART_ITEM_ADD} from "../../services/actions/cart";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../utils/constants";
import {TDropItem, TIngredient} from "../../utils/types";
import {useDispatch, useSelector} from "../../hooks/hooks";


function BurgerConstructor(): JSX.Element {
  const [isOrderModalOpen, setOrderModalOpen] = useState(false);
  const cartItems = useSelector(store => store.cart.cartItems);
  const cartBun = useSelector(store => store.cart.cartBun);
  const user = useSelector(store => store.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [, dropRef] = useDrop({
    accept: 'ingredient',
    drop(item: TDropItem) {
      const ingredient = item.ingredient;
      if (ingredient.type === 'bun') {
        dispatch({type: CART_BUN_SET, bun: ingredient})
      } else {
        dispatch({type: CART_ITEM_ADD, item: ingredient});
      }
    }
  })

  function onStartOrder() {
    if (!user) {
      navigate(ROUTES.LOGIN);
      return;
    }
    setOrderModalOpen(true);
  }

  function onModalClose() {
    setOrderModalOpen(false);
  }

  const totalPrice = useMemo(() => {
    const bunPrice = cartBun ? cartBun.price * 2 : 0;
    return bunPrice + cartItems.reduce((acc: number, item: TIngredient) => acc + item.price, 0)
  }, [cartItems, cartBun]);

  return (
    <>
      <div className={`pl-4 pt-25 pr-4 ${styles.root}`} ref={dropRef} data-test="drop-container">
        <ConstructorBun type='top' />
        {cartItems.map((item: TIngredient) => {
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
            onClick={onStartOrder}
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