// Tugas 1: Interface
interface LoanRecord {
  id: number;
  borrowerName: string;
  vehicleName: string;
  durationDays: number;
  isReturned: boolean;
}

// Tugas 2: Array of Objects
const loanHistory: LoanRecord[] = [
  { id: 1, borrowerName: "Andi", vehicleName: "Honda Brio", durationDays: 2, isReturned: true },
  { id: 2, borrowerName: "Budi", vehicleName: "Toyota Avanza", durationDays: 4, isReturned: false },
  { id: 3, borrowerName: "Citra", vehicleName: "Suzuki Ertiga", durationDays: 1, isReturned: true },
  { id: 4, borrowerName: "Siti", vehicleName: "Toyota Innova", durationDays: 2, isReturned: false }
];

// Tugas 3 & 4: Method Chaining (Filter + Map dengan Arrow Function)
const activeWarnings = loanHistory
  .filter(loan => loan.isReturned === false)
  .map(loan => `PERINGATAN: ${loan.borrowerName} belum mengembalikan ${loan.vehicleName}! (Durasi: ${loan.durationDays} hari)`);

console.log(activeWarnings);