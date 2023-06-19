import HomePage from "../../pages/home/home-page";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProfilePage from "../../pages/profile/profile-page";
import styles from './app.module.css';

function App() {
  return (
    <div className={styles.root}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App;
