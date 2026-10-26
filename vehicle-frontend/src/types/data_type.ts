export type VehicleStatus = "available" | "borrowed";

export interface Vehicle {
    id : number;
    plate_number : string;
    brand : string;
    model : string;
    status : VehicleStatus;
    officer_note : string | null;
}