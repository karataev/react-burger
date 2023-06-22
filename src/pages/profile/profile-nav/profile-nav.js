import {NavLink, useNavigate} from "react-router-dom";
import {ROUTES} from "../../../utils/constants";
import styles from "../profile-page.module.css";
import {logoutApi} from "../../../api/norma-api";
import storage from "../../../utils/storage";

function ProfileNav() {
  const navigate = useNavigate();

  async function onLogout() {
    await logoutApi();
    navigate(ROUTES.HOME);
    storage.clear();
  }

  return (
    <div>
      <NavLink to={ROUTES.PROFILE} className={styles.link} end>
        {({isActive}) => (
          <span className={`text text_type_main-medium ${!isActive && 'text_color_inactive'}`}>Профиль</span>
        )}
      </NavLink>
      <NavLink to={ROUTES.ORDERS} className={styles.link}>
        {({isActive}) => (
          <span className={`text text_type_main-medium ${!isActive && 'text_color_inactive'}`}>История заказов</span>
        )}
      </NavLink>
      <button className={`text text_type_main-medium ${styles.link} ${styles.logout}`} onClick={onLogout}>
        Выход
      </button>
    </div>
  )
}

export default ProfileNav;

