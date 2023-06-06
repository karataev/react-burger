import {useContext, useMemo, useState} from "react";
import styles from './burger-constructor.module.css';
import ConstructorCard from "./constructor-card/constructor-card";
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "./order-details/order-details";
import {ConstructorContext} from "../../services/appContext";

function BurgerConstructor() {
  const [isOrderModalOpen, setOrderModalOpen] = useState(false);
  const {items} = useContext(ConstructorContext);

  function onModalOpen() {
    setOrderModalOpen(true);
  }

  function onModalClose() {
    setOrderModalOpen(false);
  }

  const totalPrice = useMemo(() => items.reduce((acc, item) => acc + item.price, 0), [items]);

  return (
    <>
      <div className={`pl-4 pt-25 pr-4 ${styles.root}`}>
        {items.map((item, index) => {
          let type;
          if (index === 0) type = 'top';
          else if (index === items.length - 1) type = 'bottom';

          return (
            <ConstructorCard key={item._id} item={item} type={type} />
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
        <OrderDetails orderNumber={'034536'} onClose={onModalClose} />
      )}
    </>
  )
}

export default BurgerConstructor;