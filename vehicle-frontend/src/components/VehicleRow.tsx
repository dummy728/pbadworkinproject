// src/components/VehicleRow.tsx

import type { Vehicle } from "../types/types";

interface VehicleRowProps {
  vehicle: Vehicle;
}

export default function VehicleRow({ vehicle }: VehicleRowProps) {
  return (
    <tr>
      <td>{vehicle.plateNumber}</td>
      <td>{vehicle.brand}</td>
      <td>{vehicle.model}</td>
      <td>{vehicle.status}</td>
      <td>{vehicle.notes || "-"}</td>
    </tr>
  );
}