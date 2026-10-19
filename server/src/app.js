const express = require('express');
const cors = require('cors');
const produkRoutes = require('./routes/produkRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'REST API SQLite berjalan 🚀' });
});

app.use('/api/produk', produkRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint tidak ditemukan' });
});

module.exports = app;