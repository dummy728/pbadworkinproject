import type { Vehicle } from "../../types/data_type"
import VehicleRow from "./VehicleRow";

interface VehicleTableProps {
    vehicles : Vehicle[];
}

const VehicleTable = ({vehicles}: VehicleTableProps) => {
    return(
        <section>
            {vehicles.length === 0 ? (<p>Tidak ada data</p>) : (<table>
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
                {vehicles.map((item)=>(
                    <VehicleRow key={item.id} vehicle={item} />
                ))}
            </tbody>
        </table>)}
        </section>
    )
}

export default VehicleTable;