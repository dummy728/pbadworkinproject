// ==========================================
// LESSON 1: Penerapan Tipe Data & Interface
// ==========================================

// 1. Deklarasi Variabel Dasar
const appName: string = "Sistem Peminjaman Kendaraan";
let availableVehiclesCount: number = 5;
const isSystemActive: boolean = true;

console.log(`=== Selamat Datang di ${appName} ===\n`);

// 2. Membuat Interface sebagai Kontrak Data
interface Vehicle {
  id: number;
  plateNumber: string;
  brand: string;
  model: string;
  status: string;
  officerNote?: string; // Optional property (boleh diisi/tidak)
}

// 3. Array of Objects Berdasarkan Interface
const vehicles: Vehicle[] = [
  {
    id: 1,
    plateNumber: "BK 1234 AA",
    brand: "Toyota",
    model: "Avanza",
    status: "available"
  },
  {
    id: 2,
    plateNumber: "BK 5678 BB",
    brand: "Toyota",
    model: "Innova",
    status: "borrowed",
    officerNote: "Lecet halus pada pintu kanan"
  },
  {
    id: 3,
    plateNumber: "BK 9999 CC",
    brand: "Honda",
    model: "CR-V",
    status: "available"
  }
];

console.log("--- Lesson 1: Data Kendaraan Awal ---");
console.log(vehicles);
console.log("\n");


// ==========================================
// LESSON 2: Pengolahan Array (Methods)
// ==========================================

// 1. filter(): Menyaring data kendaraan yang berstatus 'available'
const availableVehicles = vehicles.filter(function(vehicle) {
  return vehicle.status === "available";
});

console.log("--- Lesson 2: Hasil Filter (Status Available) ---");
console.log(availableVehicles);

// 2. map(): Mentransformasi array object menjadi array string (Label Nama)
const vehicleNames = vehicles.map(function(vehicle) {
  return `${vehicle.brand} ${vehicle.model} (${vehicle.plateNumber})`;
});

console.log("\n--- Lesson 2: Hasil Map (Daftar Nama Kendaraan) ---");
console.log(vehicleNames);
console.log("\n");


// ==========================================
// LESSON 3: Fungsi (Arrow Function)
// ==========================================

// 1. Arrow Function Dasar dengan Pengecekan Tipe Data
const isBorrowed = (status: string): boolean => {
  return status === "borrowed";
};

console.log("--- Lesson 3: Pengecekan Status dengan Arrow Function ---");
console.log("Apakah status 'borrowed' dipinjam?", isBorrowed("borrowed")); // Output: true
console.log("Apakah status 'available' dipinjam?", isBorrowed("available")); // Output: false

// 2. Refactoring & Method Chaining (Filter + Map + Arrow Function)
// Menyiapkan label khusus untuk kendaraan yang tersedia saja
const availableVehicleLabels = vehicles
  .filter(vehicle => vehicle.status === "available")
  .map(vehicle => `[TERSEDIA] ${vehicle.brand} ${vehicle.model}`);

console.log("\n--- Lesson 3: Combined Method Chaining (Siap untuk UI React) ---");
console.log(availableVehicleLabels);