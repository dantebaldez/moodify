	/// <reference types="react" />

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ children }: { children: JSX.Element }) { // TODO: corrigir erro do TypeScript "Não é possível encontrar o namespace 'JSX'" — aparentemente inofensivo, revisar depois

  const { user, loading } = useAuth();

  if (loading) return <p>Carregando...</p>;
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/mood"
          element={
            <ProtectedRoute>
              <div>Página de Mood</div> {/* Temporário */}
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}
