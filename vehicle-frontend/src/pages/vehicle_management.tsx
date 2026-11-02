import { useEffect, useState } from "react";
import VehicleForm from "../components/VehicleForm";
import type { Vehicle } from "../types/data_type";
import '../App.css'
import VehicleList from "../components/VehicleList";
import axiosClient from "../api/axiosClient";
import { useAuth } from "../context/AuthContext";

export default function VehicleManagement() {
  const [vehicles, setvehicles] = useState<Vehicle[]>([]);
  const [isLoading, setisLoading] = useState<boolean>(true)
  const [errMsg, seterrMsg] = useState<string | null>(null)

  const { logout } = useAuth()

  const getVehicleData = async() => {
    try {
      const res = await axiosClient.get('/api/vehicles/all')
      console.log('response dari server : ', res);
      setvehicles(res.data.data)
    } catch (error) {
      seterrMsg("Gagal mengambil data dari server!")
    } finally {
      setisLoading(false)
    }
  }

  useEffect(()=>{
    getVehicleData()
  },[])

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
    <button onClick={logout}>Logout</button>
    </main>
  )
}