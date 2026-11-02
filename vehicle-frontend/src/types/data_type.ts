export type VehicleStatus = "available" | "borrowed";

export interface Vehicle {
    id : number;
    plateNumber : string;
    brand : string;
    model : string;
    status : VehicleStatus;
    officerNote : string | null;
}