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
import {ROUTES} from "../../utils/constants";
import OrdersPage from "../../pages/orders/orders-page";

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
              <Route path={ROUTES.HOME} element={<HomePage />} />
              <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
              <Route path={ROUTES.ORDERS} element={<OrdersPage />} />
              <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
              <Route path={ROUTES.LOGIN} element={<LoginPage />} />
              <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
              <Route path={ROUTES.RESET_PASSWORD} element={<ResetPassword />} />
              <Route path="*" element={<NotFound404 />} />
            </Routes>
          </BrowserRouter>
        </>
      )}
    </div>
  )
}

export default App;
