const express = require('express');
const cors = require('cors');
const vehicleRoutes = require('./src/routes/vehicleRoutes');

const PORT = process.env.PORT || 3000

const app = express();

// Middleware
app.use(cors({
  origin :'http://localhost:5173'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'REST API SQLite berjalan 🚀' });
});

app.use('/api/vehicles', vehicleRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint tidak ditemukan' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server: http://localhost:${PORT}`);
});