import styles from './profile-page.module.css';
import ProfileNav from "./profile-nav/profile-nav";
import ProfileOverview from "./profile-overview/profile-overview";
import {JSX} from "react";

function ProfileOverviewPage(): JSX.Element {
  return (
    <div className={styles.root}>
      <ProfileNav />
      <ProfileOverview />
    </div>
  )
}

export default ProfileOverviewPage;