import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>

<main>
    <div className="home-hero">
        <span className="hero-label">Sistem Informasi</span>
        <h1>Selamat Datang di Sistem Peminjaman Kendaraan</h1>
        <p>
            Aplikasi sederhana untuk membantu pengelolaan data kendaraan,
            status peminjaman, dan catatan petugas.
        </p>
        <Link to="/vehicle_management" className="hero-button">
            Mulai Mengelola Kendaraan
        </Link>
    </div>

    <div className="home-content">
        <h2>Fitur Aplikasi</h2>
        <p className="home-description">
            Kenali fitur utama yang tersedia dalam sistem ini.
        </p>

        <div className="feature-grid">
            <div className="feature-card">
                <h3>Data Kendaraan</h3>
                <p>Mengelola informasi kendaraan yang tersedia.</p>
            </div>

            <div className="feature-card">
                <h3>Status Peminjaman</h3>
                <p>Melihat status ketersediaan kendaraan.</p>
            </div>

            <div className="feature-card">
                <h3>Catatan Petugas</h3>
                <p>Menyimpan catatan terkait kendaraan.</p>
            </div>
        </div>
    </div>
</main>


    </>
  )
}

export default Home