import {useSelector} from "react-redux";
import Loader from "../loader/loader";
import {Navigate, useLocation} from "react-router-dom";

function ProtectedRoute({ onlyUnAuth = false, component }) {
  const {isAuthChecked, user} = useSelector(store => store.auth);
  const location = useLocation();

  if (!isAuthChecked) return <Loader />

  if (onlyUnAuth && user) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return component;
}

export const OnlyAuth = ProtectedRoute;

export const OnlyUnAuth = ({component}) => <ProtectedRoute onlyUnAuth={true} component={component} />
