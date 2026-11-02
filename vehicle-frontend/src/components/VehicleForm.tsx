import { useState, type FormEvent, type ChangeEvent } from "react";
import type { Vehicle, VehicleStatus } from "../types/data_type";
import axiosClient from "../api/axiosClient";

interface VehicleFormProps {
    onAdd: (vehicle: Omit<Vehicle, "id">) => void;
}

interface VehicleFormData {
    plateNumber: string;
    brand: string;
    model: string;
    status: VehicleStatus;
    officerNote: string;
}

const VehicleForm = () => {
    const [formData, setFormData] = useState<VehicleFormData>({
        plateNumber: "",
        brand: "",
        model: "",
        status: "available",
        officerNote: ""
    });

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        try {
            const newVehicle: Omit<Vehicle, "id"> = {
                plateNumber: formData.plateNumber.trim(),
                brand: formData.brand.trim(),
                model: formData.model.trim(),
                status: formData.status,
                officerNote: formData.officerNote.trim() || null
            };

            const res = await axiosClient.post(
                "/api/vehicles",
                newVehicle
            );

            console.log(res);

            setFormData({
                plateNumber: "",
                brand: "",
                model: "",
                status: "available",
                officerNote: ""
            });

        } catch (error) {
            alert("Terjadi kesalahan saat menyimpan data.");
        }
    };

    return (
        <section className="vehicle-form">
            <h2>Tambah Data Kendaraan</h2>

            <form onSubmit={handleSubmit} id="vehicleForm">
                <div className="form-group">
                    <label htmlFor="plateNumber">
                        Nomor Polisi
                    </label>
                    <input
                        type="text"
                        id="plateNumber"
                        name="plateNumber"
                        value={formData.plateNumber}
                        onChange={handleChange}
                        placeholder="Contoh: BK 1234 AA"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="brand">Merek</label>
                    <input
                        type="text"
                        id="brand"
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        placeholder="Contoh: Toyota"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="model">Model</label>
                    <input
                        type="text"
                        id="model"
                        name="model"
                        value={formData.model}
                        onChange={handleChange}
                        placeholder="Contoh: Avanza"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                    >
                        <option value="available">
                            Available
                        </option>
                        <option value="borrowed">
                            Borrowed
                        </option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="officerNote">
                        Catatan Petugas
                    </label>
                    <textarea
                        id="officerNote"
                        name="officerNote"
                        value={formData.officerNote}
                        onChange={handleChange}
                        placeholder="Catatan kondisi kendaraan"
                    />
                </div>

                <button type="submit">
                    Tambah Kendaraan
                </button>
            </form>
        </section>
    );
};

export default VehicleForm;