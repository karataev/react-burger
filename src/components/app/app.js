import HomePage from "../../pages/home/home-page";
import {Routes, Route} from "react-router-dom";
import ProfileOverviewPage from "../../pages/profile/profile-overview-page";
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
import ProfileOrdersPage from "../../pages/profile/profile-orders-page";
import {OnlyAuth, OnlyUnAuth} from "../protected-route/protected-route";
import {checkUserAuth} from "../../services/actions/auth";

function App() {
  const dispatch = useDispatch();
  const ingredientsLoading = useSelector(store => store.ingredients.ingredientsLoading);
  const ingredientsError = useSelector(store => store.ingredients.ingredientsError);

  useEffect(() => {
    dispatch(checkUserAuth());
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <div className={styles.root}>
      {ingredientsLoading && <Loader />}
      {ingredientsError && <div>Произошла ошибка</div>}
      {!ingredientsLoading && !ingredientsError && (
        <>
          <AppHeader />
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.PROFILE_ORDERS} element={<OnlyAuth component={<ProfileOrdersPage />} />} />
            <Route path={ROUTES.PROFILE_OVERVIEW} element={<OnlyAuth component={<ProfileOverviewPage />} />} />
            <Route path={ROUTES.REGISTER} element={<OnlyUnAuth component={<RegisterPage />} />} />
            <Route path={ROUTES.LOGIN} element={<OnlyUnAuth component={<LoginPage />} />} />
            <Route path={ROUTES.FORGOT_PASSWORD} element={<OnlyUnAuth component={<ForgotPassword />} />} />
            <Route path={ROUTES.RESET_PASSWORD} element={<OnlyUnAuth component={<ResetPassword />} />} />
            <Route path="/ingredients/:id" element={<HomePage />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </>
      )}
    </div>
  )
}

export default App;
