// App.tsx ou routes.tsx (onde define suas rotas)
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
// import { PrivateRoute } from './components/PrivateRoute'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            // <PrivateRoute>
              <Home />
            // </PrivateRoute>
          }
        />
        {/* Outras rotas aqui */}
      </Routes>
    </BrowserRouter>
  )
}
