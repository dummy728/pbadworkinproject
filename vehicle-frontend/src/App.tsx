import { useState } from "react";
import VehicleForm from "./components/VehicleForm";
import type { Vehicle } from "./types/data_type";
import './App.css'
import VehicleList from "./components/VehicleList";

export default function App() {
  const [vehicles, setvehicles] = useState<Vehicle[]>([]);

  function handleAddVehicle(
    newVehicle: Omit<Vehicle, "id">
  ){
    const vehicle : Vehicle = {
      ...newVehicle,
      id: Date.now(),
    };

    setvehicles((currentVehicles)=>[
      ...currentVehicles,
      vehicle,
    ]);
  }

  return(
    <main className="container">
      <header className="app-header">
        <h1 id="pageTitle">Sistem Peminjaman Kendaraan</h1>
        <p className="subtitle">Kelola data kendaraan secara dinamis DOM &amp; Javascript</p>
    </header>
    <VehicleForm onAdd={handleAddVehicle}/>
    <VehicleList vehicles={vehicles}/>
    <footer className="app-footer">
            <p>&copy; 2026 Praktikum Web Dasar &amp; DOM</p>
        </footer>
    </main>
  )
}