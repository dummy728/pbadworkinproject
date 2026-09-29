/* =========================================================
   Praktikum: Pengelolaan Data Kendaraan dengan DOM (JavaScript)
   Menggabungkan Lesson 1, 2, 3
   ========================================================= */

/* ---------- Data awal kendaraan ----------
   Catatan: Di TypeScript ada interface Vehicle.
   Di JavaScript, "kontrak" digantikan oleh struktur object
   yang konsisten. Kita tetap jaga bentuknya sama.
------------------------------------------------ */
const vehicles = [
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
        officerNote: "Lecet di pintu kanan"
    }
];

/* ----------  Mengakses elemen DOM ---------- */
const vehicleForm = document.getElementById("vehicleForm");
const plateNumberInput = document.getElementById("plateNumber");
const brandInput = document.getElementById("brand");
const modelInput = document.getElementById("model");
const statusInput = document.getElementById("status");
const officerNoteInput = document.getElementById("officerNote");
const vehicleContainer = document.getElementById("vehicleContainer");



/* State untuk filter & search */
let currentSearchQuery = "";
let currentStatusFilter = "all";

/* ----------  Fungsi Render (filter + search) ---------- */
function renderVehicles() {

    if (!vehicleContainer) return;

    /* Render dengan map() */
    vehicleContainer.innerHTML = vehicles
        .map(vehicle => `
            <div class="vehicle-card">
                <h3>${vehicle.plateNumber}</h3>
                <p class="vehicle-meta">
                    ${vehicle.brand} ${vehicle.model}
                </p>
                <span class="badge ${vehicle.status}">
                    ${vehicle.status}
                </span>
                ${vehicle.officerNote
                    ? `<p class="note">${vehicle.officerNote}</p>`
                    : ""}
                <button
                    class="btn-delete"
                    data-id="${vehicle.id}"
                >
                    Hapus
                </button>
            </div>
        `)
        .join("");

    /* Pasang event listener untuk tombol Hapus */
    const deleteButtons = vehicleContainer.querySelectorAll(".btn-delete");
    deleteButtons.forEach(button => {
        button.addEventListener("click", () => {
            const id = Number(button.dataset.id);
            deleteVehicle(id);
        });
    });
}

/* ---------- Fungsi Hapus Data ---------- */
function deleteVehicle(id) {
    const index = vehicles.findIndex(vehicle => vehicle.id === id);

    if (index !== -1) {
        vehicles.splice(index, 1);
    }

    renderVehicles();
}

/* ---------- Event Submit Form ---------- */
vehicleForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    /* Baca input */
    const plateNumber = plateNumberInput?.value.trim() ?? "";
    const brand = brandInput?.value.trim() ?? "";
    const model = modelInput?.value.trim() ?? "";
    const status = statusInput?.value ?? "";
    const officerNote = officerNoteInput?.value.trim() ?? "";

    /* Validasi */
    if (plateNumber === "" || brand === "" || model === "" || status === "") {
        alert("Lengkapi data kendaraan (Nomor Polisi, Merek, Model, Status wajib diisi).");
        return;
    }

    /* Object Vehicle baru */
    const newVehicle = {
        id: Date.now(),
        plateNumber,
        brand,
        model,
        status,
        officerNote: officerNote !== "" ? officerNote : undefined
    };

    /* Simpan ke array */
    vehicles.push(newVehicle);

    /* Render ulang */
    renderVehicles();

    /* Reset form */
    vehicleForm.reset();

    /* Fokus balik ke input pertama */
    plateNumberInput?.focus();

    console.log("Kendaraan berhasil ditambahkan:", newVehicle);
    console.log("Total kendaraan:", vehicles.length);
});

renderVehicles();

console.log("Aplikasi Sistem Peminjaman Kendaraan siap digunakan.");
console.log("Data awal:", vehicles);