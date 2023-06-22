import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";
import {ROUTES} from "../../utils/constants";

function ProtectedRouteElement() {
  const user = useSelector(store => store.auth.user);

  if (!user) return <Navigate to={ROUTES.LOGIN} />

  return <Outlet />;
}

export default ProtectedRouteElement;