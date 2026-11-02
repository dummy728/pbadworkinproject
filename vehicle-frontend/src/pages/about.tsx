import React from 'react'

const About = () => {
  return (
    <main className="about-container">
    <div className="about-heading">
        <h1>Tentang Aplikasi</h1>
        <p>Mengenal Sistem Peminjaman Kendaraan</p>
    </div>

    <div className="about-card">
        <h2>Deskripsi Aplikasi</h2>
        <p>
            Sistem Peminjaman Kendaraan merupakan aplikasi web sederhana
            untuk membantu pengelolaan informasi kendaraan.
        </p>
        <p>
            Aplikasi ini dikembangkan sebagai sarana pembelajaran
            pengembangan web menggunakan HTML, CSS, dan JavaScript.
        </p>
    </div>

    <div className="about-features">
        <div className="about-feature">
            <h3>Data Kendaraan</h3>
            <p>Menampilkan informasi kendaraan yang dikelola.</p>
        </div>

        <div className="about-feature">
            <h3>Status Peminjaman</h3>
            <p>Mengetahui apakah kendaraan tersedia atau dipinjam.</p>
        </div>

        <div className="about-feature">
            <h3>Catatan Petugas</h3>
            <p>Menyediakan informasi tambahan tentang kendaraan.</p>
        </div>
    </div>

    <div className="about-action">
        <a href="home.html">Kembali ke Home</a>
    </div>
</main>
  )
}

export default About