import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ userTypeRequired }) => {
  const loggedIn = JSON.parse(localStorage.getItem('token'));
  const userType = localStorage.getItem('userType');

  if (!loggedIn || (userTypeRequired && userType !== userTypeRequired)) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
//src\ProtectedRoute.js