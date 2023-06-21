import styles from './profile-page.module.css';
import ProfileNav from "./profile-nav/profile-nav";
import {Outlet} from "react-router-dom";

function ProfilePage() {
  return (
    <div className={styles.root}>
      <ProfileNav />
      <Outlet />
    </div>
  )
}

export default ProfilePage;