import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const ProtectedRoute = ({ userTypeRequired }) => {
  const { isAuthenticated, userType } = useAuth();

  if (!isAuthenticated || userType !== userTypeRequired) {
    return <Navigate to="/createevent" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
