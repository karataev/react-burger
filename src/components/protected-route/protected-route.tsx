import {useSelector} from "react-redux";
import Loader from "../loader/loader";
import {Navigate, useLocation} from "react-router-dom";
import {JSX} from "react";

type TProtectedRouteProps = {
  component: JSX.Element;
  onlyUnAuth?: boolean;
}

function ProtectedRoute({ onlyUnAuth = false, component }: TProtectedRouteProps): JSX.Element {
  // @ts-ignore
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

export const OnlyUnAuth = ({component}: TProtectedRouteProps) => <ProtectedRoute onlyUnAuth={true} component={component} />
