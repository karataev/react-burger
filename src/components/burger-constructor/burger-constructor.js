import {useMemo, useState} from "react";
import styles from './burger-constructor.module.css';
import ConstructorCard from "./constructor-card/constructor-card";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "./order-details/order-details";
import {useSelector} from "react-redux";

function BurgerConstructor() {
  const [isOrderModalOpen, setOrderModalOpen] = useState(false);
  const cartItems = useSelector(store => store.cartItems);

  function onModalOpen() {
    setOrderModalOpen(true);
  }

  function onModalClose() {
    setOrderModalOpen(false);
  }

  const totalPrice = useMemo(() => cartItems.reduce((acc, item) => acc + item.price, 0), [cartItems]);

  return (
    <>
      <div className={`pl-4 pt-25 pr-4 ${styles.root}`}>
        {cartItems.map((item, index) => {
          let type;
          if (index === 0) type = 'top';
          else if (index === cartItems.length - 1) type = 'bottom';

          return (
            <ConstructorCard key={item.id} item={item} type={type} />
          )
        })}

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