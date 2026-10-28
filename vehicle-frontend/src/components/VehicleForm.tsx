// src/components/VehicleForm.tsx

import { useState, type FormEvent } from "react";
import type { Vehicle, VehicleStatus } from "../types/types";

interface VehicleFormProps {
  onAdd: (vehicle: Omit<Vehicle, "id">) => void;
}

export default function VehicleForm({ onAdd }: VehicleFormProps) {
  const [plateNumber, setPlateNumber] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [status, setStatus] = useState<VehicleStatus>("Available");
  const [notes, setNotes] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onAdd({
      plate_number: plateNumber.trim(),
      brand: brand.trim(),
      model: model.trim(),
      status,
      notes: notes.trim(),
    });

    // Reset the form after adding a vehicle
    setPlateNumber("");
    setBrand("");
    setModel("");
    setStatus("Available");
    setNotes("");
  }

  return (
    <section>
      <h2>Tambah Data Kendaraan</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="plateNumber">Nomor Polisi</label>
          <input
            id="plateNumber"
            value={plateNumber}
            onChange={(e) => setPlateNumber(e.target.value)}
            placeholder="B 1234 ABC"
            required
          />
        </div>

        <div>
          <label htmlFor="brand">Merek</label>
          <input
            id="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="Toyota"
            required
          />
        </div>

        <div>
          <label htmlFor="model">Model</label>
          <input
            id="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Avanza"
            required
          />
        </div>

        <div>
          <label htmlFor="status">Status</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as VehicleStatus)}
          >
            <option value="Available">Available</option>
            <option value="Borrowed">Borrowed</option>
          </select>
        </div>

        <div>
          <label htmlFor="notes">Catatan Petugas</label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Catatan tambahan..."
          />
        </div>

        <button type="submit">Tambah Kendaraan</button>
      </form>
    </section>
  );
}