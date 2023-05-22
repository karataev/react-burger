import React from 'react';
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './app-header.module.css';

class NavItem extends React.Component {
  render() {
    return (
      <div className={`pl-5 pt-4 pr-5 pb-4 ${styles.nav_item}`}>
        {this.props.children}
      </div>
    )
  }
}

export default class AppHeader extends React.Component {

  render() {
    return (
      <header className={`pt-4 pb-4 ${styles.header}`}>
        <NavItem>
          <BurgerIcon type="primary" />
          <span className="text text_type_main-default">Конструктор</span>
        </NavItem>
        <NavItem>
          <ListIcon type="secondary" />
          <span className="text text_type_main-default text_color_inactive">Лента заказов</span>
        </NavItem>
        <Logo />
        <NavItem>
          <ProfileIcon type="secondary" />
          <span className="text text_type_main-default text_color_inactive">Личный кабинет</span>
        </NavItem>
      </header>
    )
  }
}
