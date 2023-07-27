import ProfileNav from "./profile-nav/profile-nav";
import styles from './profile-page.module.css';
import {JSX} from "react";

function ProfileOrdersPage(): JSX.Element {
  return (
    <div className={styles.root}>
      <ProfileNav />
      <div>todo orders</div>
    </div>
  )
}

export default ProfileOrdersPage;