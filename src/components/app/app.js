import HomePage from "../../pages/home/home-page";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProfilePage from "../../pages/profile/profile-page";
import styles from './app.module.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getIngredients} from "../../services/actions/ingredients";
import Loader from "../loader/loader";
import NotFound404 from "../../pages/404/not-found-404";
import RegisterPage from "../../pages/register/register-page";
import LoginPage from "../../pages/login/login-page";
import AppHeader from "../app-header/app-header";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";

function App() {
  const dispatch = useDispatch();
  const ingredientsLoading = useSelector(store => store.ingredients.ingredientsLoading);
  const ingredientsError = useSelector(store => store.ingredients.ingredientsError);

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <div className={styles.root}>
      {ingredientsLoading && <Loader />}
      {ingredientsError && <div>Произошла ошибка</div>}
      {!ingredientsLoading && !ingredientsError && (
        <>
          <BrowserRouter>
            <AppHeader />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="*" element={<NotFound404 />} />
            </Routes>
          </BrowserRouter>
        </>
      )}
    </div>
  )
}

export default App;
