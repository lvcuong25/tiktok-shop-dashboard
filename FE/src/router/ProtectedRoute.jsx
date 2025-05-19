import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('accessToken');
  if (!token) {
    // Nếu chưa đăng nhập, chuyển về trang đăng nhập
    return <Navigate to="/login" replace />;
  }
  // Nếu đã đăng nhập, render children (component bên trong)
  return children;
};

export default ProtectedRoute;
