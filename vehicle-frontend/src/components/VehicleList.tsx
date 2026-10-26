import type { Vehicle } from "../types/data_type";
import VehicleTable from "./VehicleList/VehicleTable";

interface VehicleListProps {
    vehicles : Vehicle[];
}

const VehicleList = ({vehicles}: VehicleListProps) => {
    return(
        <section className="vehicle-list">
            <h2>Daftar Kendaraan</h2>
            <VehicleTable vehicles={vehicles}/>
        </section>
    )
}

export default VehicleList;