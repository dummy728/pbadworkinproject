import type { Vehicle } from "../../types/data_type"


interface VehicleRowProps {
    vehicle : Vehicle;
}

const VehicleRow = ({vehicle}:VehicleRowProps) => {
    return(
        <tr>
            <td>{vehicle.plate_number}</td>
            <td>{vehicle.brand}</td>
            <td>{vehicle.model}</td>
            <td>{vehicle.status}</td>
            <td>{vehicle.officer_note || "-"}</td>
        </tr>
    )
}

export default VehicleRow