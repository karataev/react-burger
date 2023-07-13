import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './app-header.module.css';
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../utils/constants";
import {JSX} from "react";

type TNavItemProps = {
  to: string;
  icon: string;
  title: string;
}

function NavItem(props: TNavItemProps): JSX.Element {
  return (
    <NavLink
      to={props.to}
      className={`pl-5 pt-4 pr-5 pb-4 ${styles.nav_item}`}
    >
      {({isActive}) => (
        <>
          {props.icon === 'burger' && <BurgerIcon type={isActive ? 'primary' : 'secondary'} />}
          {props.icon === 'list' && <ListIcon type={isActive ? 'primary' : 'secondary'} />}
          {props.icon === 'profile' && <ProfileIcon type={isActive ? 'primary' : 'secondary'} />}
          <span className={`text text_type_main-default ${!isActive && 'text_color_inactive'}`}>{props.title}</span>
        </>
      )}

    </NavLink>
  )
}

function AppHeader(): JSX.Element {
  return (
    <header className={`pt-4 pb-4 ${styles.header}`}>
      <div className={`${styles.col} ${styles.col_left}`}>
        <NavItem to={ROUTES.HOME} title="Конструктор" icon="burger" />
        <NavItem to="/todo" title="Лента заказов" icon="list" />
      </div>
      <div className={styles.col}>
        <Logo />
      </div>
      <div className={`${styles.col} ${styles.col_right}`}>
        <NavItem to={ROUTES.PROFILE_OVERVIEW} title="Личный кабинет" icon="profile" />
      </div>
    </header>
  )
}

export default AppHeader;