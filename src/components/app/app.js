import HomePage from "../../pages/home/home-page";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProfilePage from "../../pages/profile/profile-page";
import styles from './app.module.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getIngredients} from "../../services/actions/ingredients";
import Loader from "../loader/loader";
import NotFound404 from "../../pages/404/not-found-404";

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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  )
}

export default App;
