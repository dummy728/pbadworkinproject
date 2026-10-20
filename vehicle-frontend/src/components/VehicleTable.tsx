// src/components/VehicleTable.tsx

import type { Vehicle } from "../types/types";
import VehicleRow from "./VehicleRow";

interface VehicleTableProps {
  vehicles: Vehicle[];
}

export default function VehicleTable({
  vehicles,
}: VehicleTableProps) {
  return (
    <section>
      <h2>Daftar Kendaraan</h2>

      {vehicles.length === 0 ? (
        <p>Belum ada data kendaraan.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nomor Polisi</th>
              <th>Merek</th>
              <th>Model</th>
              <th>Status</th>
              <th>Catatan Petugas</th>
            </tr>
          </thead>

          <tbody>
            {vehicles.map((vehicle) => (
              <VehicleRow
                key={vehicle.id}
                vehicle={vehicle}
              />
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}