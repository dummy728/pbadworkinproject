import React from 'react'
import {
    BrowserRouter,
    Link,
    Route,
    Routes
} from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about'
import VehicleManagement from './pages/vehicle_management'
import Login from './pages/login'

import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>

                <nav className="navbar">
                    <Link to="/" className="navbar-brand">
                        Vehicle Management
                    </Link>

                    <div className="navbar-links">
                        <Link to="/home">Home</Link>
                        <Link to="/about">About</Link>
                    </div>
                </nav>

                <Routes>

                    {/* Halaman publik */}
                    <Route path="/login" element={<Login />} />

                    {/* Halaman yang dilindungi */}
                    <Route element={<ProtectedRoute />}>

                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route
                            path="/vehicle_management"
                            element={<VehicleManagement />}
                        />

                    </Route>

                </Routes>

                <footer className="app-footer">
                    &copy; 2026 Sistem Peminjaman Kendaraan
                </footer>

            </BrowserRouter>
        </AuthProvider>
    )
}

export default App