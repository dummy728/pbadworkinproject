export type VehicleStatus = "Available" | "Borrowed";

export interface Vehicle {
    id : number;
    plateNumber : string;
    brand : string;
    model : string;
    status : VehicleStatus;
    notes : string;
}