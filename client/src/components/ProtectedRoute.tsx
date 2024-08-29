import { Navigate } from "react-router-dom";
import { useMe } from "../hooks/auth/useMe";
type ProtectedRouteProps = {
  children: React.ReactNode;
  restrictTo?: string[];
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  restrictTo = ["user", "admin"],
}) => {
  const { isLoading, user } = useMe();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!user) return <Navigate to="/login" />;

  if (!restrictTo.includes(user.role)) return <Navigate to="/" />;

  return children;
};

export default ProtectedRoute;
