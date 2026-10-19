const express = require('express');
const cors = require('cors');

// Import routes (otomatis trigger koneksi DB saat require)
const vehicleRoutes = require('./src/routes/vehicleRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Server jalan 🚀' });
});

// Routes
app.use('/api/vehicles', vehicleRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server: http://localhost:${PORT}`);
});